import React, {useState, useEffect} from 'react'
import {Button} from "react-bootstrap"
import _ from  "lodash"
// Import hooks
import {useParams} from "react-router-dom"

// Import utils
import {fetchHero} from "../utils/utils"
 
const IMAGE_SIZE = "portrait_incredible";


export default function HeroDetails() {
    let heroTeam;
    let {id} = useParams();

    const [hero, setHero] = useState();

    useEffect(() => {
        fetchHero(id).then(data => setHero(data[0])).catch(err => console.error(err))
    }, []);

    if (!hero) return

    function addHero(){
        // Updating local storage
        heroTeam = JSON.parse(localStorage.getItem('heroTeam')) || [];
        //heroTeam.push([hero.name, hero.thumbnail.path]);
        heroTeam.push({id: hero.id, name: hero.name, image: hero.thumbnail.path});


        localStorage.setItem('heroTeam', JSON.stringify(heroTeam));
    }

    function removeHero(){
        let heroToRemove = {id: hero.id, name: hero.name, image: hero.thumbnail.path};
        console.log(heroToRemove);
        // Updating local storage
        heroTeam = JSON.parse(localStorage.getItem('heroTeam')) || [];
        for(let i=0; i<heroTeam.length; i++){
            if(_.isEqual(heroTeam[i], heroToRemove)){  
                heroTeam.splice(i,1);
            }
        }

        localStorage.setItem('heroTeam', JSON.stringify(heroTeam));
    }

    return (
        <div className = "container large">
            <div className = "hero_details-container">
                <img src = {`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`} alt="hero image full size" />
                <div className = "hero_details">
                    <h4>Name</h4>
                    <p>{hero.name}</p> 
                    {hero.description ? (<>
                    <h4>Description</h4>
                    <p>{hero.description}</p>
                        </>) : null}
                <div className = "hero_series">
                        <h4>Series</h4>
                        <ul>{hero.series.items.map(s => <li key={Math.random() * 1000}>{s.name}</li>)}</ul>
                </div>        
                </div>
            </div>
        <Button variant="primary" className="mt-auto" onClick={addHero}>Add to Team</Button>
        <Button variant="secondary" className="mt-auto" onClick={removeHero}>Remove from Team</Button>
        </div>
        
    )
}
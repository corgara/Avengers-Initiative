import React from 'react'
import {useState} from "react"

import Grid from "../components/Grid"
import Container from "../components/Container"
import Hero from '../components/Hero'

const IMAGE_SIZE = "portrait_fantastic"


export default function Team() {
    let [heroTeam, setHeroTeam] = useState([]);
    let cards;

    heroTeam = JSON.parse(localStorage.getItem('heroTeam')) || [];
    console.log(heroTeam)
    if(heroTeam.length == 0){
        return
    }

        cards = heroTeam.map((heroTeam) => (
            <Hero name = {heroTeam.name} 
            id={heroTeam.id} 
            key = {heroTeam.id} 
            thumbnail={`${heroTeam.image}/${IMAGE_SIZE}.jpg`}
            />
        
        ));



    return (
        <Container>
            <h1>My Team</h1>
            <Grid>
                {cards ? cards : ""}
            </Grid>
        </Container>
        
    )
}
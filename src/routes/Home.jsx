import React from 'react'
import {useState} from "react"

// Import components
import SearchBar from "../components/SearchBar"
import Grid from "../components/Grid"
import Hero from '../components/Hero'
import Container from "../components/Container"
// Import utils
import {fetchHero} from "../utils/utils"

const IMAGE_SIZE = "portrait_fantastic"

export default function Home() {
    const [heroes, setHeroes] = useState([]);

    let cards;

    if (heroes) {
        cards = heroes.map((h) => (
            <Hero name = {h.name} 
            id={h.id} 
            key = {h.id} 
            thumbnail={`${h.thumbnail.path}/${IMAGE_SIZE}.${h.thumbnail.extension}`}/>
        
        ));
    }

    return (
        <Container>
            <h1>Create Your Marvel Dream Team</h1>
            <SearchBar setter={setHeroes} />
            <Grid>
                {cards ? cards : ""}
            </Grid>
        </Container>
    )
}
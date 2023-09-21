import React, {useRef} from 'react'
import {Form, Button} from "react-bootstrap"

import Grid from "../components/Grid"

// Import utils
import {fetchHeroes} from "../utils/utils"

export default function SearchBar({setter}) {
    let input = useRef("");

    const handleClick = async (e) => {
        e.preventDefault();
        let value = input.current.value;
        if(value === "") return;

        try {
            let heroes = await fetchHeroes(value);
            setter(heroes);
        } catch(err) {
            return console.error(err);
        }
    };


    return (
        <Form onSubmit={handleClick}>
            <input type="text" className="form-input" placeholder="Search Hero" ref={input}></input>
            <Button onClick={handleClick}>Search</Button>
        </Form>
    )
}
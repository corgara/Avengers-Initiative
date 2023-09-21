import React, {useState, useEffect, useContext} from 'react'
import {Card, Button} from "react-bootstrap"

// Import hooks
import {Link, useParams} from "react-router-dom"

// Import utils
import {fetchHero} from "../utils/utils"

export default function Hero({id, thumbnail, name}) {
    
    return (
        <Card>
            <Card.Img
            variant="top"
            src = {thumbnail} alt="thumbnail" 
            />
            <Card.Body className="d-flex flex-column">
                <Link to={`/${id}`}>
                    <Card.Title>{name}</Card.Title>
                </Link>
            </Card.Body>
        </Card>
        )
    }
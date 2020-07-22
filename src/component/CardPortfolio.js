import React from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CardPortfolio =({pic, link, title, description})=>{
    return(
    <Card style={{ width: '18rem', margin:13 }}>
        <Card.Img variant="top" src={pic} height="165px"/>
        <Card.Body>
            <Card.Title style={{color:'black'}}><strong>{title}</strong></Card.Title>
            <Card.Text style={{color:'black'}}>
            {description}
            </Card.Text>
            <Button href={link} variant="primary" >View Demo</Button>
        </Card.Body>
    </Card>
    )
}
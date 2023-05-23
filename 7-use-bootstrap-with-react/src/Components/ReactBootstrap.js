import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ReactBootstrap() {
  return (
    <Card style={{width: "20rem"}} className="p-1"> 
        <Card.Body>
            <Card.Title>Card Title</Card.Title> 
            <Card.Text>My name is Hasan. I lives in Sylhet, Bangladesh. Currently I am working as a Machine Learning Engineer at KaleidoSoft, Croatia</Card.Text>
            <Button>Learn More</Button> 
        </Card.Body>
    </Card> 
  )
}

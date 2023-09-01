
import React from 'react'
import { sedes } from './sedes'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Conocenos.css'

function conocenos() {
  return (
    <div className='contenedorconocenos'>
    
    <div>
       
      <div className='cards-wrap'>
       
        {sedes.map( (sede, index) => {
          return(
            <Card className='card-menu' key={index} style={{ width: '20rem' }}>
            <Card.Img variant="top" src={sede.img} />
            <Card.Body>
              <Card.Title>{sede.Nombre}</Card.Title>
              <Button variant="primary" href={sede.Ubicación}>Ir</Button>
            </Card.Body>
          </Card>
          )
        })}
       
      </div>
      </div>
     
    <div/>
    </div>
  )
}

export default conocenos
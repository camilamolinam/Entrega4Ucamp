import React from 'react'
import { productos } from './productos'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './menu.css'

function Menu() {
  return (
    <div className='contenedormenu'>
    
    <div>
       
      <div className='cards-wrap'>
       
        {productos.map( (producto, index) => {
          return(
            <Card className='card-menu' key={index} style={{ width: '20rem' }}>
            <Card.Img variant="top" src={producto.img} />
            <Card.Body>
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Text>
              {producto.descripcion}
              </Card.Text>
              <Button variant="primary">{producto.precio}</Button>
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

export default Menu
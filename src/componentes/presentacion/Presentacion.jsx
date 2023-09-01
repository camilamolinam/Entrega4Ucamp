import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './presentacion.css'
import img1 from '../../img/Shoot-Niko Parrilla-106.jpg'
import img2 from '../../img/Shoot-Niko Parrilla-149.jpg'
import img3 from '../../img/Shoot-Niko Parrilla-184.jpg'


function Presentacion() {
    return (
        <>
            <div className='carouseldiv'>
                <Carousel fade>

                    <Carousel.Item>

                        <img className="d-block w-100 img-fluid" src={img1} alt="First slide" />

                        <Carousel.Caption>

                            <p>Punta de anca</p>

                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item>

                        <img className="d-block w-100 img-fluid" src={img2} alt="First slide" />

                        <Carousel.Caption>

                            <p>Pollo</p>

                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item>

                        <img className="d-block w-100 img-fluid" src={img3} alt="First slide" />

                        <Carousel.Caption>

                            <p> Churrasco</p>

                        </Carousel.Caption>

                    </Carousel.Item>
                   
                </Carousel>

            </div>



        </>



    )

}



export default Presentacion
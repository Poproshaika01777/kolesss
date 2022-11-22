import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import amg1 from '../assets/amg1.webp'
import amg2 from '../assets/amg2.webp'
import amg3 from '../assets/amg3.webp'
import amg4 from '../assets/amg4.webp'
import amg5 from '../assets/amg5.webp'




export default class CarouselBox5 extends Component {
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ amg1 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ amg2 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ amg3 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ amg4 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ amg5 }
                        alt="holox"
                    />
                    
                </Carousel.Item>
            </Carousel>
        )
    }
}
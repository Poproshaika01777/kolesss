import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import bmw1 from '../assets/bmw1.webp'
import bmw2 from '../assets/bmw2.webp'
import bmw3 from '../assets/bmw3.webp'
import bmw4 from '../assets/bmw4.webp'
import bmw5 from '../assets/bmw5.webp'

export default class CarouselBox extends Component {
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ bmw1 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ bmw2 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ bmw3 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ bmw4 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ bmw5 }
                        alt="holox"
                    />
                    
                </Carousel.Item>
            </Carousel>
        )
    }
}
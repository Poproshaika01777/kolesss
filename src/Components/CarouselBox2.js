import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import corvette1 from '../assets/corvette1.webp'
import corvette2 from '../assets/corvette2.webp'
import corvette3 from '../assets/corvette3.webp'
import corvette4 from '../assets/corvette4.webp'
import corvette5 from '../assets/corvette5.webp'


export default class CarouselBox2 extends Component {
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ corvette1 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ corvette2 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ corvette3 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ corvette4 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ corvette5 }
                        alt="holox"
                    />
                    
                </Carousel.Item>
            </Carousel>
        )
    }
}
import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import audi1 from '../assets/audi1.webp'
import audi2 from '../assets/audi2.webp'
import audi3 from '../assets/audi3.webp'
import audi4 from '../assets/audi4.webp'
import audi5 from '../assets/audi5.webp'


export default class CarouselBox3 extends Component {
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ audi1 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ audi2 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ audi3 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ audi4 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ audi5 }
                        alt="holox"
                    />
                    
                </Carousel.Item>
            </Carousel>
        )
    }
}
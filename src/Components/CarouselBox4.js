import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import ford1 from '../assets/ford1.webp'
import ford2 from '../assets/ford2.webp'
import ford3 from '../assets/ford3.webp'
import ford4 from '../assets/ford4.webp'
import ford5 from '../assets/ford5.webp'



export default class CarouselBox4 extends Component {
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ ford1 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ ford2 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ ford3 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ ford4 }
                        alt="holox"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ ford5 }
                        alt="holox"
                    />
                    
                </Carousel.Item>
            </Carousel>
        )
    }
}
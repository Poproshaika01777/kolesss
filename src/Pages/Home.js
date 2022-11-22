import React, {Component} from "react";
import CarouselBox from "../Components/CarouselBox";
import CarouselBox2 from "../Components/CarouselBox2";
import CarouselBox3 from "../Components/CarouselBox3";
import CarouselBox4 from "../Components/CarouselBox4";
import CarouselBox5 from "../Components/CarouselBox5";


export default class Home extends Component {
    render(){
        return(
            <>
            <CarouselBox />
            <CarouselBox2 />
            <CarouselBox3 />
            <CarouselBox4 />
            <CarouselBox5 />
            </>
        )
    }
}
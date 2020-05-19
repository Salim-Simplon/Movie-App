import React, { Component } from "react";
/* Il faut ajouter la Carousel component : "It is a react port of slick carousel"
l'ajout avec la commande : npm install react-slick --save */
import Slider from "react-slick";
/* Aussi il faut installer "slick-carousel" pour le style css et la forme
l'ajout avec la commande : npm install slick-carousel */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div id="car">
        <h1> Comming Soon... </h1>
        <Slider {...settings}>
          <div>
            <img className="Carre" src="/images/GP1.jpg" alt="" />
          </div>
          <div>
            <img className="Carre" src="/images/GP3.jpg" alt="" />
          </div>
          <div>
            <img className="Carre" src="/images/GP2.jpg" alt="" />
          </div>
          <div>
            <img className="Carre" src="/images/GP4.jpg" alt="" />
          </div>
          <div>
            <img className="Carre" src="/images/GP7.jpg" alt="" />
          </div>
          <div>
            <img className="Carre" src="/images/GP8.jpg" alt="" />
          </div>
          <div>
            <img className="Carre" src="/images/GP5.jpg" alt="" />
          </div>
          <div>
            <img className="Carre" src="/images/GP6.jpeg" alt="" />
          </div>
          <div>
            <img className="Carre" src="/images/GP9.png" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

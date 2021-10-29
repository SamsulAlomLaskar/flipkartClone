import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

function CarouselImg() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel"
            src="https://thumbs.dreamstime.com/z/shop-window-sale-sign-shopping-mall-shop-window-sale-sign-shopping-mall-135775850.jpg"
            //   src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel"
            src="https://c8.alamy.com/comp/2AKGTKK/grocery-shopping-promotional-sale-banner-fast-shopping-cart-full-of-fresh-colorful-food-2AKGTKK.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel"
            src="https://previews.123rf.com/images/vectorgift/vectorgift1812/vectorgift181200194/126819633-sale-banner-template-design-super-sale-for-online-shopping-vector-illustration.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselImg;

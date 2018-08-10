import {
  Button,
  ListGroup,
  ListGroupItem,
  Panel,
  Thumbnail
} from "react-bootstrap";
import React, { Component } from "react";

import Slider from "react-slick";

const nextArrow = <button>Next</button>;
const prevArrow = <button>Prev</button>;

const header = <h3>Templates</h3>;

class Templates extends Component {
  render() {
    var settings = {
      centerMode: true,
      centerPadding: "100px",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: nextArrow,
      prevArrow: prevArrow,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        }
      ]
    };
    return (
      <Panel header={header} footer="FUCK ME">
        <Slider {...settings}>
          {Array.from(new Array(100), (x, i) => i).map(num => (
            <Thumbnail key={num} src="/assets/thumbnaildiv.png" alt="242x200">
              <h3>Thumbnail {num}</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="danger">Delete</Button>
              </p>
            </Thumbnail>
          ))}
        </Slider>
      </Panel>
    );
  }
}

export default Templates;

import { React } from "react";
import Slider from "react-slick";
import "./slider.css";

import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";

import { Container, Row, Col } from "react-grid-system";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Sliders = (props) => {
  const sliderData = props.sliderListData;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  function sliderListingUI() {
    let resultData = sliderData;

    if (resultData.length !== 0) {
      return resultData.map((element) => (
        <Card id={element.id} key={element.id}>
          <CardMedia sx={{ height: 400 }} image={element.image} title="image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {element.title.length < 100
                ? element.title
                : element.title.substring(0, 100) + "..."}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {element.content.length < 100
                ? element.content
                : element.content.substring(0, 100) + "..."}
            </Typography>
          </CardContent>
        </Card>
      ));
    }
  }

  return (
    <Container style={{ marginLeft: 0, marginRight: 0 }}>
      <Row>
        <Col md={8}>
          <Slider {...settings}>{sliderListingUI()}</Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default Sliders;

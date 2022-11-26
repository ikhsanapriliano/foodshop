import React from "react";
import { Container, Card, Carousel } from "react-bootstrap";
import "./PromoSpesial.scss";
import SpecialOffer from "../../Assets/PilihanAssets/special.png";

const PromoSpesial = () => {
  return (
    <div className="promo-container">
      <div className="promo-title">Promo Spesial</div>
      <Container className="promo-card-container">
        <Carousel variant="dark">
          <Carousel.Item>
            <div className="promo-child-container d-flex">
              <Card className="promo-card">
                <Card.Img className="promo-photo" src={SpecialOffer} />
                <Card.Body>
                  <Card.Title>Card Title 1</Card.Title>
                  <Card.Text className="promo-text">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
              <Card className="promo-card">
                <Card.Img className="promo-photo" src={SpecialOffer} />
                <Card.Body>
                  <Card.Title>Card Title 2</Card.Title>
                  <Card.Text className="promo-text">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="promo-child-container d-flex">
              <Card className="promo-card">
                <Card.Img className="promo-photo" src={SpecialOffer} />
                <Card.Body>
                  <Card.Title>Card Title 3</Card.Title>
                  <Card.Text className="promo-text">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
              <Card className="promo-card">
                <Card.Img className="promo-photo" src={SpecialOffer} />
                <Card.Body>
                  <Card.Title>Card Title 4</Card.Title>
                  <Card.Text className="promo-text">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="promo-child-container d-flex">
              <Card className="promo-card">
                <Card.Img className="promo-photo" src={SpecialOffer} />
                <Card.Body>
                  <Card.Title>Card Title 5</Card.Title>
                  <Card.Text className="promo-text">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
              <Card className="promo-card">
                <Card.Img className="promo-photo" src={SpecialOffer} />
                <Card.Body>
                  <Card.Title>Card Title 6</Card.Title>
                  <Card.Text className="promo-text">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default PromoSpesial;

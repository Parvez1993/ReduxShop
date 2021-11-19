import React from "react";
import { Card, Button } from "react-bootstrap";
import cover from "../images/cover.jpg";
import styled from "styled-components";
function Banner() {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={cover} alt="Card image" height="800" />
        <Wrapper>
          <Card.ImgOverlay className="overlay">
            <Card.Title className="text-muted">
              <h1>Fashion Everywhere</h1>
            </Card.Title>
            <Card.Text className="text-dark">
              <p>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </Card.Text>
            <Card.Text>
              <Button variant="dark">Products</Button>
            </Card.Text>
          </Card.ImgOverlay>
        </Wrapper>
      </Card>
    </>
  );
}
const Wrapper = styled.div`
  .overlay {
    width: 40vw;
    margin: 300px 0;
    font-size: 22px;

    @media screen and (max-width: 600px) {
      width: 80vw;
    }
  }
`;

export default Banner;

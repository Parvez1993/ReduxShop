import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

function ProductPost({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Container>
        <Row className="py-5">
          {posts.map((post) => (
            <Col>
              <Card style={{ width: "200px", marginTop: "20px" }}>
                <Card.Img variant="top" src={post.image} height="200px" />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Button variant="dark">Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ProductPost;

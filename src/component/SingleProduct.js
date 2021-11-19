import axios from "axios";
import React, { useEffect } from "react";
import { Col, Container, Button, Row, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../redux/action/productActions";
function SingleProduct() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const selector = useSelector((item) => item);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        dispatch(selectedProduct(res.data));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetch();
    return () => {
      setLoading(false);
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, id]);

  console.log(selector.loading);

  const { title, price, description, category, image, rating } =
    selector.selectedProduct;
  console.log(title, price, description, category, image, rating);
  return (
    <Container>
      {loading ? (
        <Spinner animation="grow" className="m-auto" />
      ) : (
        <Row className="my-5 py-5">
          <Col lg={6}>
            <div className="d-flex justify-content-center">
              <img src={image} alt="tile" width="60%" className="" />
            </div>
          </Col>
          <Col>
            <div className="py-5 my-5">
              {" "}
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Info</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{title}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>${price}</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>{description}</td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>{category}</td>
                  </tr>
                </tbody>
              </Table>
              <Button variant="dark">Add to Cart</Button>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default SingleProduct;

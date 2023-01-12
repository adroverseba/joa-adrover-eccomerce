import { Col, Row } from "react-bootstrap";
import { Product } from "../components";
import products from "../products";

export const HomeScreen = () => {
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col xs={12} md={6} lg={4} xl={3} key={`col-prod-${product._id}`}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

import { Button, Col, Image, ListGroup, Row, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Rating } from "../components";
import products from "../products";

export const ProductScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p._id === id);

  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Button variant="primary" onClick={handleNavigateBack}>
        Go Back
      </Button>

      <Row className="mt-3">
        <Col sm={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col sm={6} lg={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="my-3 my-lg-0">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>{product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col className="d-grid ">
                    <Button
                      className="btn-block"
                      type="button"
                      disabled={product.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

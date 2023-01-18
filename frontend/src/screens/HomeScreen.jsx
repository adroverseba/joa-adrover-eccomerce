import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/slices/product/thunks";
import { Loader, Message, Product } from "../components";
import { Col, Row } from "react-bootstrap";

export const HomeScreen = () => {
  const { products, error, isLoading } = useSelector(
    (state) => state.productList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col xs={12} md={6} lg={4} xl={3} key={`col-prod-${product._id}`}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { productApi } from "../api/productApi";
import { Product } from "../components";

export const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await productApi.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
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

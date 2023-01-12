import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; e-shop</Col>
        </Row>
      </Container>
    </footer>
  );
};

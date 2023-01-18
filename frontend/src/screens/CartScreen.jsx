import { useEffect } from "react";
import {
  Alert,
  Button,
  Col,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Message } from "../components";
import { addToCart, removeFromCart } from "../store/slices/cart/thunks";

export const CartScreen = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: productId } = useParams();

  const queryString = location.search; //"?qty=1"
  const searchParams = new URLSearchParams(queryString);
  const qty = Number(searchParams.get("qty")) || 1;
  console.log(typeof qty);

  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (productId) dispatch(addToCart(productId, qty));
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
    console.log("checkout");
  };

  return (
    <Row>
      <Col md={8}>
        <h1 className="display-7 py-3">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">GoBack</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} rounded fluid />
                  </Col>
                  <Col md={3}>
                    <Link
                      className="text-decoration-none"
                      to={`/product/${item.product}`}
                    >
                      {item.name}
                    </Link>
                  </Col>
                  <Col md={2}>$ {item.price}</Col>

                  <Col md={2}>
                    {item.countInStock > 0 ? (
                      <Form.Select
                        size="sm"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Select>
                    ) : (
                      <Alert variant="danger">Out of Stock</Alert>
                    )}
                  </Col>

                  <Col sm={2}>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h2>
              Subtotal (
              {cartItems.reduce(
                (acc, item) => acc + (item.countInStock > 0 ? item.qty : 0),
                0
              )}
              ) Items
            </h2>
            $
            {cartItems
              .reduce(
                (acc, item) =>
                  acc + (item.countInStock > 0 ? item.qty * item.price : 0),
                0
              )
              .toFixed(2)}
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              variant="primary"
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              Proceed To Checkout
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
};

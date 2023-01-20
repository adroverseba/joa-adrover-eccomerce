import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";
import { FormContainer, Loader, Message } from "../components";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/user";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  const queryString = location.search;
  const searchParams = new URLSearchParams(queryString);
  const redirect = searchParams.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect, { replace: true });
    }
  }, [userInfo, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Sign In
        </Button>
      </Form>
      <Col className="d-flex justify-content-end">
        New Customer?
        <Link
          to={redirect ? `/register?redirect=${redirect}` : "/register"}
          className="ps-2"
        >
          Register
        </Link>
      </Col>
    </FormContainer>
  );
};

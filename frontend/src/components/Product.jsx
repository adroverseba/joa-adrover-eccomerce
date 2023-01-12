import { Card } from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom";
import { Rating } from "./Rating";

export const Product = ({ product }) => {
  return (
    <Card>
      <Card.Link as={RouterLink} to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Card.Link>
      {/* <Card.Header>{product.name}</Card.Header> */}
      <Card.Body>
        <Card.Link as={RouterLink} to={`/product/${product._id}`}>
          <Card.Title>{product.name}</Card.Title>
        </Card.Link>
        <Card.Subtitle>
          <Rating
            value={product.rating}
            text={`of ${product.numReviews} reviews`}
            color={"red"}
          />
        </Card.Subtitle>

        <Card.Text as="h3" className="my-3">
          ${product.price}
        </Card.Text>
        <Card.Link as={RouterLink} to={`/product/${product._id}`}>
          Card Link
        </Card.Link>
        <Card.Link as={RouterLink} to={`/product/${product._id}`}>
          Another Link
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

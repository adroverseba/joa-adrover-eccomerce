import { Alert } from "react-bootstrap";

export const Message = ({ variant, children }) => {
  return (
    <Alert variant={variant}>
      <Alert.Heading className="text-center">{children}</Alert.Heading>
    </Alert>
  );
};

Message.defaultProps = {
  variant: "info",
};

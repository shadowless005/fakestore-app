import { Spinner, Container } from "react-bootstrap";

function LoadingSpinner() {
  return (
    <Container className="text-center mt-5">
      <Spinner animation="border">
        <span className="mt-3">Loading...</span>
      </Spinner>
    </Container>
  );
}

export default LoadingSpinner;

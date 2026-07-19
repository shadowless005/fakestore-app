import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to FakeStore</h1>

      <p className="mt-3">
        Browse products, view details, and practice working with a real API.
      </p>

      <Button as={Link} to="/products" variant="primary">
        View Products
      </Button>
    </Container>
  );
}

export default Home;

import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <Container className="text-center">
        <h1 className="display-3 fw-bold">Welcome to FakeStore 🛍️</h1>

        <p className="lead mt-4">
          Discover amazing products at great prices. Browse our collection and
          explore our store.
        </p>

        <Button as={Link} to="/products" size="lg" className="mt-3">
          Shop Now
        </Button>
      </Container>
    </div>
  );
}

export default Home;

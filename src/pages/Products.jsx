import { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }
  return (
    <Container className="mt-4">
      <h2 className="mb-2 text-center">Our Products</h2>

      <p className="text-center text-muted mb-4">
        {products.length} products available
      </p>

      <Row>
        {products.map((product) => (
          <Col key={product.id} md={6} lg={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;

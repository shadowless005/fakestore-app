import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import api from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import DeleteModal from "../components/DeleteModal";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch {
        setError("Unable to load product.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  async function deleteProduct() {
    try {
      await api.delete(`/products/${id}`);

      navigate("/products");
    } catch {
      setError("Unable to delete product.");
    }
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={5}>
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </Col>

        <Col md={7}>
          <h2>{product.title}</h2>

          <h4 className="text-success mt-3">${product.price}</h4>

          <p className="mt-3">
            <strong>Category:</strong> {product.category}
          </p>

          <p>{product.description}</p>

          <Button variant="success" className="me-2">
            Add to Cart
          </Button>

          <Button
            as={Link}
            to={`/edit-product/${product.id}`}
            variant="warning"
            className="me-2"
          >
            Edit Product
          </Button>

          <Button variant="danger" onClick={() => setShowDeleteModal(true)}>
            Delete Product
          </Button>

          <DeleteModal
            show={showDeleteModal}
            handleClose={() => setShowDeleteModal(false)}
            handleDelete={deleteProduct}
          />

          <div className="mt-4">
            <Button variant="secondary" onClick={() => navigate("/products")}>
              Back to Products
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;

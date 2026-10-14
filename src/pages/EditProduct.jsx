import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import api from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";

function EditProduct() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/products/${id}`);

        setFormData({
          title: response.data.title,
          price: response.data.price,
          description: response.data.description,
          category: response.data.category,
        });
      } catch {
        setMessage("Unable to load product.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put(`/products/${id}`, {
        ...formData,
        price: Number(formData.price),
      });
      setMessage("Product updated successfully!");
    } catch {
      setMessage("Update failed.");
    }
  }

  if (loading) return <LoadingSpinner />;

  return (
    <Container className="mt-5" style={{ maxWidth: "700px" }}>
      <h2>Edit Product</h2>

      {message && <Alert>{message}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>

          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>

          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>

          <Form.Control
            as="textarea"
            rows={4}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Category</Form.Label>

          <Form.Control
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" variant="warning">
          Update Product
        </Button>
      </Form>

      <Alert variant="info" className="mt-4">
        FakeStoreAPI is a mock API. Updates appear successful but are not
        permanently saved.
      </Alert>
    </Container>
  );
}

export default EditProduct;

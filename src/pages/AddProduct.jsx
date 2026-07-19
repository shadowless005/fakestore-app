import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import api from "../services/api";

function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/products", formData);

      setMessage("Product created successfully!");

      setFormData({
        title: "",
        price: "",
        description: "",
        category: "",
      });
    } catch {
      setMessage("Something went wrong.");
    }
  }

  return (
    <Container className="mt-5" style={{ maxWidth: "700px" }}>
      <h2 className="mb-4">Add Product</h2>

      {message && <Alert>{message}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Product Title</Form.Label>

          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>

          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
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
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Category</Form.Label>

          <Form.Control
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit">Create Product</Button>
      </Form>

      <Alert variant="info" className="mt-4">
        FakeStoreAPI is a mock API. Your product will appear to be created, but
        it will not be permanently saved.
      </Alert>
    </Container>
  );
}

export default AddProduct;

import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        style={{
          height: "200px",
          objectFit: "contain",
          padding: "15px",
        }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ fontSize: "1rem" }}>{product.title}</Card.Title>

        <h5 className="text-success">${product.price}</h5>

        <Button
          as={Link}
          to={`/products/${product.id}`}
          variant="primary"
          className="mt-auto"
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

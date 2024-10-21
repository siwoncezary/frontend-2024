import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  return (
    <>
      <Container className="p-4">
        <h1>Product id : {id}</h1>
        <Row className="mt-4">
          <Col>1 of 1</Col>
          <Col>2 of 1</Col>
        </Row>
      </Container>
    </>
  );
}

export default Product;

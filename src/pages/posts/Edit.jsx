import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const EditPost = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>HALAMAN EDIT POST</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditPost;

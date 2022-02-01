import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const CreatePost = () => {
  return (
    <Container>
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>HALAMAN CREATE POST</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreatePost;

import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Index = () => {
  return (
    <Container>
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>HALAMAN INDEX POST</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
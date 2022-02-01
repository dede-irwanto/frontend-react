import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col className="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body className="p-4">
              <h1>Express JS + React JS</h1>
              <p className="lead">
                Belajar FullStack <strong>Express.js dan React.js</strong>
              </p>
              <Button variant="primary" size="lg">
                SELENGKAPNYA
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

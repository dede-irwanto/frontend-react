import axios from "axios";
import { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  // state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // state validation
  const [validation, setValidation] = useState({});

  // show alert
  const [show, setShow] = useState(true);

  // navigate
  const navigate = useNavigate();

  // method store POST
  const storePost = async (e) => {
    e.preventDefault();

    // send data to server
    await axios
      .post("http://localhost:3001/api/posts/store", {
        title: title,
        content: content,
      })
      .then(() => {
        // redirect
        navigate("/posts");
      })
      .catch((error) => {
        // assign validation on state
        setValidation(error.response.data);
      });
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>
              {validation.errors && (
                <div>
                  <Alert variant="danger">
                    <Alert.Heading>Error!</Alert.Heading>
                    {validation.errors.map((error, index) => (
                      <p key={index}>
                        {error.param} : {error.msg}
                      </p>
                    ))}
                  </Alert>
                </div>
              )}
              <Form onSubmit={storePost}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>TITLE</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukkan Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>CONTENT</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Masukkan Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  SIMPAN
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreatePost;

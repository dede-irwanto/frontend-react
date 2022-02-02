import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

const EditPost = () => {
  // state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // state validation
  const [validation, setValidation] = useState({});

  // navigate
  const navigate = useNavigate();

  // get id from paramater
  const { id } = useParams();

  // hook effect
  useEffect(() => {
    // panggil fungsi getPostByID()
    getPostByID();
  }, []);

  // function get post by id
  const getPostByID = async () => {
    // get data from server
    const response = await axios.get(`http://localhost:3001/api/posts/${id}`);
    // get response data
    const data = await response.data.data;

    // assign data to state
    setTitle(data.title);
    setContent(data.content);
  };

  // function update post
  const updatePost = async (e) => {
    e.preventDefault();

    // send data to server
    await axios
      .patch(`http://localhost:3001/api/posts/update/${id}`, {
        title: title,
        content: content,
      })
      .then(() => {
        // redirect
        navigate("/posts");
      })
      .catch((error) => {
        // assign validation to state
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
              <Form onSubmit={updatePost}>
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

export default EditPost;

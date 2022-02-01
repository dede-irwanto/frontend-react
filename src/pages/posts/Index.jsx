// import hook useState dan useEffect from react
import axios from "axios";
import { useState, useEffect } from "react";

// import component react-bootstrap
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const IndexPost = () => {
  // define state
  const [posts, setPosts] = useState([]);

  // useEffect hook
  useEffect(() => {
    // panggil method "fecthData"
    fecthData();
  }, []);

  // function fectData
  const fecthData = async () => {
    // fecthing
    const response = await axios.get("http://localhost:3001/api/posts");
    // get response data
    const data = await response.data.data;
    // assign response data to state "posts"
    setPosts(data);
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>
              <Button
                as={Link}
                to="/posts/create"
                variant="success"
                className="mb-3"
              >
                TAMBAH POST
              </Button>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>NO.</th>
                    <th>TITLE</th>
                    <th>CONTENT</th>
                    <th>AKSI</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post, index) => (
                    <tr key={post.id}>
                      <td>{index + 1}</td>
                      <td>{post.title}</td>
                      <td>{post.content}</td>
                      <td>
                        <Button
                          as={Link}
                          to={`/posts/edit/${post.id}`}
                          variant="primary"
                          size="sm"
                          className="me-2"
                        >
                          EDIT
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default IndexPost;

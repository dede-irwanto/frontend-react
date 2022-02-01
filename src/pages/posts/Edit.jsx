import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

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
  });

  // functionn get post by id
  const getPostByID = async () => {
    // get data from server
    const response = await axios.get(`http://localhost:3001/api/posts/${id}`);
    // get response data
    const data = await response.data.data;

    // assign data to state
    setTitle(data.title);
  };

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

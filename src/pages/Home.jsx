import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import styles from "../style/Home.module.css"; // Import custom CSS

export default function Home() {
  return (
    <Container className="text-center my-5">
      <Row>
        <Col>
          <h1 className="home-title">Welcome to the Home Page</h1>
          <p className="home-description">Please login to continue</p>
          <Link to="/login">
            <Button variant="primary" className={styles.loginbtn}>
              Login
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

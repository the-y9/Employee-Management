import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Logout from "./Logout";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../style/dashboard.css";

export default function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  if (user) {
    return (
      <>
        <Container className="py-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1 className="mb-0">Dashboard</h1>
            <Logout />
          </div>

          <h4 className="mb-4">
            Welcome, <i>{user ? user.username : "Guest"}</i>
          </h4>

          <Button variant="primary" onClick={() => navigate("/empman")}>
            Go to Employee Management
          </Button>
        </Container>
      </>
    );
  }
  return <Home />;
}

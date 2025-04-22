import { useDispatch } from "react-redux";
import { removeUser } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <>
      <Button onClick={handleLogout}> Log Out </Button>
    </>
  );
}

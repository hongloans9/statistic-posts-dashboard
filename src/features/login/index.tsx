import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { getToken } from "./loginAPI";
import "./login.css";

const Login = () => {
  let history = useHistory();

  const register = () => {
    getToken().then(data => {
      localStorage.setItem("token", data)
      history.push("/statistics")
    })
  }

  return (
    <Container>
      <Button className="login-button" variant="success" onClick={register}>
        Go to dashboard
      </Button>
    </Container>
  )
}

export default Login

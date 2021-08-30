import { useHistory } from "react-router-dom";
import { getToken } from "./loginAPI";

const Login = () => {
  let history = useHistory();

  const register = () => {
      getToken().then(data => {
        console.log(data)
        localStorage.setItem("token", data)
        history.push("/statistics")
      })
  }

  return (
    <div className="container">
      <div className="login-wrapper">
        <button className="login-button" onClick={register}>
          Go to dashboard
        </button>
      </div>
    </div>
  )
}

export default Login

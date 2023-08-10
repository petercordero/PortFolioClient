import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/authService";
import { Divider, Input } from "antd";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    post('/auth/login', requestBody)
      .then((response) => {

        console.log('JWT token', response.data.authToken);
        storeToken(response.data.authToken)
        authenticateUser()
        navigate('/');
      })
      .catch((error) => {
        console.log("error", error)
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };

  return (
    <div className="container">
      <Divider><h1>Login</h1></Divider>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label>Email</label>
          <Input
            type="email"
            name="email"
            placeholder="email@example.com"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <br />
        <div>
          <label>Password</label>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>Don't have an account yet?</p>

      <Link to="/signup"><button>Sign Up</button></Link>
      <br />
    </div>
  )
}

export default LoginPage;
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/authService";
import { Divider } from "antd";

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

        console.log('JWT token', response.data.authToken );
        storeToken(response.data.authToken)
        authenticateUser()
        navigate('/');                             // <== ADD      
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };
  
  return (
    <div className="container">
     <Divider><h1>Login</h1></Divider>
      <form onSubmit={handleLoginSubmit}>
        <div>
        <label>Email:&nbsp;</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
        </div>
        <br />
    <div>
        <label>Password:&nbsp;</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        </div>
<br />
        <button type="submit">Login</button>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }
<br />
      <p>Don't have an account yet?</p>
     
      <Link to="/signup"><button>Sign Up</button></Link>
    </div>
  )
}

export default LoginPage;
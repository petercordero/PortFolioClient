import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { post } from "../services/authService";
import { Divider } from "antd";


const SignupPage = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
    fullName: "",
    location: "",
    username: ""
  })

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  
  const handleSignupSubmit = (e) => {
    e.preventDefault();

    post('/auth/signup', user)
      .then((response) => {
        console.log("New User", response.data)
        navigate('/login');
      })
      .catch((error) => {
        console.log("Error", error)
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };

  
  return (
    <div className="container">
      <Divider><h1>Sign Up</h1></Divider>

      <form onSubmit={handleSignupSubmit}>
        <div>
        <label>Email:&nbsp;</label>
        <input 
          type="email"
          name="email"
          value={user.email}
          onChange={handleTextChange}
        />
        </div>
        <br />
        <div>
        <label>Password:&nbsp;</label>
        <input 
          type="password"
          name="password"
          value={user.password}
          onChange={handleTextChange}
        />
        </div>
        <br />
        <div>
        <label>Username:&nbsp;</label>
        <input 
          type="text"
          name="username"
          value={user.username}
          onChange={handleTextChange}
        />
        </div>
        <br />
        <div>
        <label>Full Name:&nbsp;</label>
        <input 
          type="text"
          name="fullName"
          value={user.fullName}
          onChange={handleTextChange}
        />
        </div>
        <br />
        <div>
        <label>Location:&nbsp;</label>
        <input 
          type="text"
          name="location"
          value={user.location}
          onChange={handleTextChange}
        />
        </div>
<br />
        <button type="submit">Sign Up</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }
<br />
      <p>Already have account?</p>
      <Link to="/login"><button>Login</button></Link>
    </div>
  )
}

export default SignupPage;
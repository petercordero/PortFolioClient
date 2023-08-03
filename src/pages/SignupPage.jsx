import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { post } from "../services/authService";


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
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={user.email}
          onChange={handleTextChange}
        />

        <label>Password:</label>
        <input 
          type="password"
          name="password"
          value={user.password}
          onChange={handleTextChange}
        />

        <label>Username:</label>
        <input 
          type="text"
          name="username"
          value={user.username}
          onChange={handleTextChange}
        />

        <label>Full Name:</label>
        <input 
          type="text"
          name="fullName"
          value={user.fullName}
          onChange={handleTextChange}
        />

        <label>Location:</label>
        <input 
          type="text"
          name="location"
          value={user.location}
          onChange={handleTextChange}
        />
<br />
        <button type="submit">Sign Up</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Already have account?</p>
      <Link to="/login"> Login</Link>
    </div>
  )
}

export default SignupPage;
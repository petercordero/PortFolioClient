import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
 
function Navbar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    const getToken = () => {
        return localStorage.getItem('authToken')
      }

  return (
    <nav className="nav navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link to="/"><button className="navbar-brand">Port Folio ⛵</button></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="nav navbar-nav">
        <Link to="/all-portfolios">
        <button>All Portfolios</button>
      </Link>
 
      {getToken() && (
        <>      
        <Link to="/new-portfolio">
            <button>New Portfolio</button>
        </Link>
        <Link to="/user-portfolios">
            <button>{user && user.username}'s Portfolios</button>
        </Link>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}
 
      {!getToken() && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
        </div>
      </div>
    </div>
  </nav>
  );
}
 
export default Navbar;
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
 
function Navbar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    const getToken = () => {
        return localStorage.getItem('authToken')
      }

  return (
    <nav>
      <Link to="/">
        <button>Port Folio ⛵</button>
      </Link>

      <Link to="/all-portfolios">
        <button>All Portfolios</button>
      </Link>
 
      {getToken() && (
        <>      
        <Link to="/new-portfolio">
            <button>New Portfolio</button>
        </Link>
        <Link to="/user-portfolios">
            <button>Your Portfolios</button>
        </Link>
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}
 
      {!getToken() && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}
 
export default Navbar;
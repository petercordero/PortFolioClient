import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {

  const { user, logOutUser } = useContext(AuthContext);

  const getToken = () => {
    return localStorage.getItem('authToken')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "white" }}>
      <div className="container-fluid">
        <Link to="/"><h5 className="navbar-brand">Port Folio ⛵</h5></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="nav navbar-nav">
            <Link to="/all-portfolios">
              <h6>All Portfolios</h6>
            </Link>

            {getToken() && user && (
              <>
                <Link to="/new-portfolio">
                  <h6>New Portfolio</h6>
                </Link>
                <Link to={`/profile/${user._id}`}>
                  <h6>{user && user.fullName}'s Profile</h6>
                </Link>
                <h6 className="hover" onClick={logOutUser}>Logout</h6>
              </>
            )}

            {!getToken() && (
              <>
                <Link to="/signup"> <h6>Sign Up</h6> </Link>
                <Link to="/login"> <h6>Login</h6> </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
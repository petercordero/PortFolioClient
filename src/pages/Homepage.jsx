import { Divider } from "antd"
import { Link } from "react-router-dom"
import Ship from "../assets/PortFolio.png"

const Homepage = () => {

  const getToken = () => {
    return localStorage.getItem('authToken')
  }

  return (
    <div className="container" style={{ marginTop: "33px" }}>
    <Divider><img src={Ship}/></Divider>
    <br />
      {!getToken() && (
        <>
               <h4>Sign Up or Login to set sail with your new portfolio! ⛵</h4>
               <br />
               <div>
               <Link to="/login"><button>Login</button></Link>
               <div className="divider"/>
               <Link to="/signup"><button>Sign Up</button></Link>
               </div>
               </>
            )}
            <br />
    </div>
  )
}

export default Homepage
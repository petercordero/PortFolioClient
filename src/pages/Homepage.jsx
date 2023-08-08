import { Divider } from "antd"
import { Link } from "react-router-dom"
const Homepage = () => {
  return (
  <div style={{marginTop: "150px"}}>
    <Divider><h1>Port Folio ⛵</h1></Divider>
    <h4>Sign Up or Login to set sail with your new portfolio!</h4>
    <br />
    <Link to="/login"><button>Login</button></Link>
    <div className="divider"/>
    <Link to="/signup"><button>Sign Up</button></Link>
    </div>
  )
}

export default Homepage
import { useContext, useEffect, useState } from "react"
import { get } from "../services/authService"
import { Link } from "react-router-dom"
import PortfolioCard from "../components/PortfolioCard"
import { Divider } from "antd";
import { AuthContext } from "../context/auth.context"

const Profile = () => {
    const { user } = useContext(AuthContext)
    const [portfolios, setPortfolios] = useState([])
   
    let reverse = [...portfolios].reverse()

    const getPortfolios = () => {
        get('/portfolios')
        .then((response) => {
            console.log("Portfolios", response.data)
            setPortfolios(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getPortfolios()
    }, [])

  return (
    <div className="container">
<Divider><h1>{user && user.fullName}'s Profile</h1></Divider>
<h4>{user && user.email} | {user && user.location}</h4>
<br />
<Link to="/new-portfolio">
    <button>New Portfolio</button>
</Link>
<br />

      <div className="row row-cols-1 row-cols-md-5 g-4" style={{display:"flex", justifyContent:"center", marginLeft: "0px"}}>
        {reverse.map((portfolio) => {
          return (
            <PortfolioCard key={portfolio._id} {...portfolio} />
          );
        })} 
        </div>
        <br />
    </div>
  )
}

export default Profile
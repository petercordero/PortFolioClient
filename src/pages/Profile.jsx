import { useContext, useEffect, useState } from "react"
import { get } from "../services/authService"
import { Link, useNavigate, useParams } from "react-router-dom"
import PortfolioCard from "../components/PortfolioCard"
import { Divider } from "antd";
import { AuthContext } from "../context/auth.context"

const Profile = () => {
  const { user } = useContext(AuthContext)
  const [userData, setUserData] = useState(null)
  const [portfolios, setPortfolios] = useState(null)
  const { userId } = useParams()
  const navigate = useNavigate();
  const { logOutUser } = useContext(AuthContext);

  const getPortfolios = () => {
    get(`/users/profile/${userId}`)
      .then((response) => {
        console.log("Portfolios", response.data)
        setUserData(response.data)
        setPortfolios(response.data.listedPortfolio.reverse())

      })
      .catch((err) => {
        console.log(err)
      })
  }

  const deleteProfile = () => {
    get(`/users/delete/${userId}`)
      .then(() => {
        logOutUser
      })
      .then(() => {
        navigate('/');
      })
  }

  useEffect(() => {
    getPortfolios()
  }, [userId])
  console.log("portfolios", portfolios, "user", user)

  return (
    <div className="container">
      <Divider><h2>{userData && userData.fullName}'s Profile</h2></Divider>
      <h4>{userData && userData.email} | {userData && userData.location}</h4>
      <br />
      <Link to="/new-portfolio">
        <button>New Portfolio</button>
      </Link>
      <br />

      <div className="row row-cols-1 row-cols-md-5 g-4" style={{ display: "flex", justifyContent: "center" }}>
        {portfolios ? portfolios.map((portfolio) => {

          return (
            <PortfolioCard key={portfolio._id} {...portfolio} />
          );
        }) : <p>Loading...</p>}
      </div>
      <br />
      <button onClick={() => {deleteProfile(); logOutUser();}}>Delete Profile</button>
    </div>
  )
}

export default Profile
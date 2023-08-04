import { useContext, useEffect, useState } from "react"
import { get } from "../services/authService"
import { PortfolioContext } from "../context/portfolio.context"
import { Link } from "react-router-dom"
import PortfolioCard from "../components/PortfolioCard"
import { Row, Divider } from "antd";
import { AuthContext } from "../context/auth.context"

const AllPortfolios = () => {
    const { user } = useContext(AuthContext)
    const [portfolios, setPortfolios] = useState([])
   
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
    <div>
<Divider><h1>All Portfolios</h1></Divider>

{user && <Link to="/new-portfolio">
    <button>New Portfolio</button>
</Link>
}
<br />
        <br />
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {portfolios.map((portfolio) => {
          return (
            <PortfolioCard key={portfolio._id} {...portfolio} />
          );
        })} 
        </div>
    </div>
  )
}


export default AllPortfolios
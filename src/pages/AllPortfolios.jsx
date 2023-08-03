import { useContext, useEffect, useState } from "react"
import { get } from "../services/authService"
import { PortfolioContext } from "../context/portfolio.context"
import { Link } from "react-router-dom"
import PortfolioCard from "../components/PortfolioCard"

const AllPortfolios = () => {

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
<h1>All Portfolios</h1>
<Link to="/new-portfolio">
            <button>New Portfolio</button>
        </Link>
        {portfolios.map((portfolio) => {
          return (
            <PortfolioCard key={portfolio._id} {...portfolio} />
          );
        })} 
    </div>
  )
}


export default AllPortfolios
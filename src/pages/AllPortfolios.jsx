import { useEffect, useState } from "react"
import { get } from "../services/authService"
import { Link } from "react-router-dom"
import PortfolioCard from "../components/PortfolioCard"
import { Divider } from "antd";

const AllPortfolios = () => {
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
    <div className="container" style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
      <Divider><h2>All Portfolios</h2></Divider>

      <Link to="/new-portfolio">
        <button>New Portfolio</button>
      </Link>
      <br />
      <div className="row row-cols-1 row-cols-md-5 g-4" style={{ display: "flex", justifyContent: "center" }}>
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

export default AllPortfolios
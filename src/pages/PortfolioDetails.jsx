import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AddProject from "./AddProject";
import ProjectCard from "../components/ProjectCard";
import { get } from "../services/authService";
import { AuthContext } from "../context/auth.context";
import { Divider } from "antd";

const PortfolioDetails = () => {
  const [portfolio, setPortfolio] = useState(null);

  const { portfolioId } = useParams();

  const { user } = useContext(AuthContext);

  const getPortfolio = () => {
    get(`/portfolios/portfolio/${portfolioId}`)
      .then((response) => {
        const onePortfolio = response.data;
        console.log("This portfolio", onePortfolio)
        setPortfolio(onePortfolio);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log("Hit a useEffect")
    getPortfolio()
  }, [])

  return (
    <div className="container">
        <br />
      <Link to="/all-portfolios">
        <button>Back to portfolios</button>
      </Link>  
        {portfolio &&  <Divider><h1>{portfolio.title} by {portfolio.owner.fullName}</h1></Divider>}
        {/* <h4>{portfolio.owner.email} | {portfolio.owner.location}</h4> */}
      
      {portfolio &&
        portfolio.projects.map((project) => (
            <ProjectCard key={project._id} {...project} />
            ))}
          {user && <Link to={`/portfolio/edit/${portfolioId}`}>
        <button>Edit Portfolio</button></Link>}
           <Divider></Divider>
            {portfolio && (
              <>
                {user  &&  user._id === portfolio.owner._id && <AddProject portfolioId={portfolioId} setPortfolio={setPortfolio} />}
              </>
            )}
            <br />
    </div>
  );
}

export default PortfolioDetails;
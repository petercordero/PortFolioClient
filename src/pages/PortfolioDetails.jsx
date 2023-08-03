import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AddProject from "./AddProject";
import ProjectCard from "../components/ProjectCard";
import { get } from "../services/authService";


const PortfolioDetailsPage = () => {
  const [portfolio, setPortfolio] = useState(null);

  const { portfolioId } = useParams();

  const getPortfolio = () => {          //  <== ADD A NEW FUNCTION
    get(`/portfolios/portfolio/${portfolioId}`)
      .then((response) => {
        const onePortfolio = response.data;
        setPortfolio(onePortfolio);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPortfolio()
  }, [])

  
  return (
    <div>
      {portfolio && (
        <>
          <h1>{portfolio.title}</h1>
        </>
      )}

        <AddProject portfolioId={portfolioId} setPortfolio={setPortfolio} />

      {portfolio &&
        portfolio.projects.map((project) => (
            <ProjectCard key={project._id} {...project} />
      ))}

      <Link to="/all-portfolios">
        <button>Back to portfolios</button>
      </Link>

      <Link to={`/portfolio/edit/${portfolioId}`}>
        <button>Edit Project</button>
      </Link>  
    </div>
  );
}

export default PortfolioDetailsPage;
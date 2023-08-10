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
        setPortfolio({ ...onePortfolio, projects: [...onePortfolio.projects.reverse()] });
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
      {portfolio &&

        <>
          {user && user._id === portfolio.owner._id && <Link to={`/portfolio/edit/${portfolioId}`}>
            <button>Edit Portfolio</button></Link>}

        </>

      }
      {portfolio && <Divider><h1>{portfolio.title} by {portfolio.owner.fullName}</h1></Divider>}
      {portfolio && <h4>{portfolio.owner.email} | {portfolio.owner.location}</h4>}
      <div className="row row-cols-1 row-cols-md-5 g-4" style={{ display: "flex", justifyContent: "center" }}>
        {portfolio &&
          portfolio.projects.map((project) => (
            <ProjectCard key={project._id} {...project} />
          ))}
      </div>
      {portfolio && (
        <>
          {user && user._id === portfolio.owner._id && <AddProject portfolioId={portfolioId} setPortfolio={setPortfolio} />}

        </>
      )}
    </div>
  );
}

export default PortfolioDetails;
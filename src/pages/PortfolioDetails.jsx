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

//    no, use the if stuff
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
        {portfolio &&  <Divider><h1>{portfolio.title}</h1></Divider>}
      <Link to="/all-portfolios">
        <button>Back to portfolios</button>
      </Link>  
       <br />
       <br />
      {portfolio &&
        portfolio.projects.map((project) => (
            <ProjectCard key={project._id} {...project} />
            ))}
            {portfolio && (
              <>
              {/* //this is the if stuff, way better and cleaner 👍 */}
                {user  &&  user._id === portfolio.owner._id && <AddProject portfolioId={portfolioId} setPortfolio={setPortfolio} />}
              </>
            )}
            <br />
      <br />
    </div>
  );
}

export default PortfolioDetails;
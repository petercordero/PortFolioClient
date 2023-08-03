import { Link } from "react-router-dom";

const PortfolioCard = ( { title, owner, image, _id } ) => {
  
  return (
    <div>
      <Link to={`/portfolio/${_id}`}>
        <h3>{title} by {owner}</h3>
      </Link>
      <img style={{ maxWidth: "200px" }} src={image}/>
    </div>
  );
}

export default PortfolioCard;
import { Link } from "react-router-dom";

const PortfolioCard = ( { title, owner, image, _id } ) => {
  
  return (
    
    <div className="col">
    <div className="card" style={{width: "12rem"}}>
    <Link to={`/portfolio/${_id}`}>
      <img src={image} className="card-img-top" alt="cover"/></Link>
      <div className="card-body">
      <Link to={`/portfolio/${_id}`}>
        <h5 className="card-title">{title}</h5></Link>
        <Link to={`/profile/${owner._id}`}>
        <p className="card-text">{owner.fullName}</p>
        </Link>
      </div>
    </div>
  </div>
  );
}

export default PortfolioCard;
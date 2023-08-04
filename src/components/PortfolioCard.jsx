import { Link } from "react-router-dom";

const PortfolioCard = ( { title, owner, image, _id } ) => {

    const isOwner = () => {
        return user._id === portfolio.owner._id
      }
  
  return (
    
    <div class="col" style={{alignItems: "center"}} >
    <div class="card" style={{width: "20rem"}}>
    <Link to={`/portfolio/${_id}`}>
      <img src={image} class="card-img-top" alt="cover"/></Link>
      <div class="card-body">
      <Link to={`/portfolio/${_id}`}>
        <h5 class="card-title">{title}</h5></Link>
        <p class="card-text">{owner.fullName}</p>
        <button>Edit Portfolio</button>
        <button>Delete Portfolio</button>
      </div>
    </div>
  </div>
  );
}



export default PortfolioCard;
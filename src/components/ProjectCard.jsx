import { Link } from "react-router-dom"

const ProjectCard = ({ title, description, image, link}) => {

    return (
      <div className="col">
        <div className="project">
      <h3>{title}</h3>
      <h6><a href={link} target="_blank" >{link}</a></h6>
      <img style={{width: "350px"}} src={image} alt="" />
      <br />
      <br />
      <h6>{description}</h6>
      </div>
      </div>
    )
  }
  
  export default ProjectCard
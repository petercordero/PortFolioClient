import { Link } from "react-router-dom"

const ProjectCard = ({ title, image, link}) => {

    return (
        <div>
      <h3>{title}</h3>
      <h6>Link:&nbsp;<a href={link} target="_blank" >{link}</a></h6>
      <img src={image} alt="" />
      </div>
    )
  }
  
  export default ProjectCard
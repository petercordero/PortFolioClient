import { Link } from "react-router-dom"

const ProjectCard = ({ title, image, link}) => {
    
    const isOwner = () => {
        return user._id === portfolio.owner._id
      }

    return (
        <div>
      <h3>{title}</h3>
      <h6>Link:&nbsp;<a href={link} target="_blank" >{link}</a></h6>
      <img src={image} alt="" />
        <button>Edit Project</button>
      <button>Delete Project</button>
      </div>
    )
  }
  
  export default ProjectCard
const ProjectCard = ({ title, image, link}) => {
    return (
      <li>
      <h3>{title}</h3>
      <h4>Link:</h4>
      <p>{link}</p>
      <img src={image} alt="" />
    </li>
    )
  }
  
  export default ProjectCard
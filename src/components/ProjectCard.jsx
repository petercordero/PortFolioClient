const ProjectCard = ({ title, description, image, link }) => {

  return (
    <div className="col project" >
      <h3>{title}</h3>
      <h6><a href={link} target="_blank" >{link}</a></h6>
      <img style={{ width: "20rem" }} src={image} alt="image" />
      <br />
      <br />
      <h6>{description}</h6>
    </div>
  )
}

export default ProjectCard
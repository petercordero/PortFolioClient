const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="col">
      <div className="project hover">
        <h3 data-bs-toggle="collapse" data-bs-target={`#${title}`} aria-expanded="true" aria-controls={title} >{title}</h3>
      </div>
      <div class="collapse" id={title} >
        <div class="project">
          <h6><a href={link} target="_blank" >{link}</a></h6>
          <br />
          <img style={{ width: "22rem" }} src={image} alt="image" />
          <br />
          <br />
          <h6>{description}</h6>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="col">
        <div class="project">
          <h4>{title}</h4>
          <h6><a href={link} target="_blank" >{link}</a></h6>
          <br />
          <img style={{ width: "22rem", borderRadius: "12px" }} src={image} alt="image" />
          <br />
          <br />
          <h6>{description}</h6>
        </div>
      </div>
  )
}

// const ProjectCard = ({ title, description, image, link }) => {
//   return (
//     <div className="col">
//       <div className="project hover">
//         <h4 data-bs-toggle="collapse" data-bs-target={`#${title}`} aria-expanded="true" aria-controls={title} >{title}</h4>
//       </div>
//       <div class="collapse" id={title} >
//         <div class="project">
//           <h6><a href={link} target="_blank" >{link}</a></h6>
//           <br />
//           <img style={{ width: "22rem", borderRadius: "12px" }} src={image} alt="image" />
//           <br />
//           <br />
//           <h6>{description}</h6>
//         </div>
//       </div>
//     </div>
//   )
// }

export default ProjectCard
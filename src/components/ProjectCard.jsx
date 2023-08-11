// const ProjectCard = ({ title, description, image, link }) => {
//   return (
//     <div className="col">
//         <div class="project">
//           <h4>{title}</h4>
//           <h6><a href={link} target="_blank" >{link}</a></h6>
//           <br />
//           <img style={{ width: "22rem", borderRadius: "12px" }} src={image} alt="image" />
//           <br />
//           <br />
//           <h6>{description}</h6>
//         </div>
//       </div>
//   )
// }

import { useEffect, useState } from "react"

const ProjectCard = ({ title, description, image, link }) => {

  const [noBlanks, setNoBlanks] = useState(title.split(' ').join(''))

  // useEffect(() => {

  // }, [])

  console.log("Title", noBlanks)

  // const noBlanks = (string) => {
  //   console.log("Blanks", string.split(' ').join(''))
  //   return string.split(' ').join('')
  // }

  return (
    <div className="col">
      <div className="project hover">
        <h4 data-bs-toggle="collapse" data-bs-target={`#${noBlanks}`} aria-expanded="true" aria-controls={noBlanks} >{title}</h4>
      </div>
      <div className="collapse" id={noBlanks} >
        <div className="project">
          <h6><a href={link} target="_blank" >{link}</a></h6>
          <br />
          <img style={{ width: "22rem", borderRadius: "12px" }} src={image} alt="image" />
          <br />
          <br />
          <h6>{description}</h6>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
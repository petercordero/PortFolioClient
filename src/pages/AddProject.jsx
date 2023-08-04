import { useState } from "react";

import { post } from "../services/authService";

const AddProject = ({ portfolioId, setPortfolio}) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  
  const handleSubmit = (e) => {
    console.log("Submitting")
    e.preventDefault();
 
    const requestBody = { title, image, link, portfolioId };
 
    post("/projects", requestBody)
      .then((response) => {
        console.log("New project", response.data)
        setTitle("");
        setImage("");
        setLink("");
        setPortfolio(response.data)
      })
      .catch((error) => console.log(error));

  };

  
  return (
    <div className="container">
      <h3>Add New Project</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
        <label>Title:&nbsp;</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </div>
        <br />
        <div>
        <label>Image:&nbsp;</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        </div>
        <br />
        <div>
        <label>Link:&nbsp;</label>
        <input
          type="text"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        </div>
        <br />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default AddProject;
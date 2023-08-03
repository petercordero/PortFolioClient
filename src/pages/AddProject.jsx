import { useState } from "react";

import { post } from "../services/authService";

const AddProject = ({ portfolioId, setPortfolios}) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  
  const handleSubmit = (e) => {

    e.preventDefault();
 
    const requestBody = { title, image, link, portfolioId };
 
    post('/projects', requestBody)
      .then((response) => {
        console.log("New project", response.data)
        setTitle("");
        setImage("");
        setLink("");
        setPortfolios(response.data)
      })
      .catch((error) => console.log(error));

  };

  
  return (
    <div className="AddTask">
      <h3>Add New Project</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label>Link:</label>
        <input
          type="text"
          name="link"
          value={link}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default AddProject;
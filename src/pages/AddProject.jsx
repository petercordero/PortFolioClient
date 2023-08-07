import { useState } from "react";
import { Input } from "antd";
import { post } from "../services/authService";

const AddProject = ({portfolioId, setPortfolio}) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  
  const handleSubmit = (e) => {
    console.log("Submitting")
    e.preventDefault();
 
    const requestBody = { title, image, link, description, portfolioId };
 
    post(`/projects/${portfolioId}`, requestBody)
      .then((response) => {
        console.log("New project", response.data)
        setTitle("");
        setImage("");
        setLink("");
        setDescription("");
        setPortfolio(response.data)
      })
      .catch((error) => console.log(error));

  };
  const { TextArea } = Input;

  return (
    <div className="container">
      <h3>Add New Project</h3>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Title:&nbsp;</label>
        <Input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </div>
        <br />
        <div>
        <label>Image:&nbsp;</label>
        <Input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        </div>
        <br />
        <div>
        <label>Link:&nbsp;</label>
        <Input
          type="text"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        </div>
        <br />
        <div>
        <label>Description:&nbsp;</label>
        <TextArea
          type="text"
          rows={4}
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        </div>
        <br />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default AddProject;
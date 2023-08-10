import { useState } from "react";
import { Input } from "antd";
import { post } from "../services/authService";
import { Divider } from "antd";
import { fileChange } from "../services/fileChange";

const AddProject = ({ portfolioId, setPortfolio }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false)

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

  const handleFileChange = (e) => {
    setButtonDisabled(true)
    fileChange(e)
      .then((response) => {
        setButtonDisabled(false)
        setImage(response.data.image)
      })
      .catch((err) => {
        console.log(err)
        setButtonDisabled(false)
      })
  }

  const { TextArea } = Input;

  return (
    <div className="container">
      <Divider></Divider>
      <h3>Add New Project</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <Input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Link</label>
          <Input
            type="text"
            name="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Image</label>
          <Input
            type="file"
            name="image"
            onChange={handleFileChange}
          />
        </div>
        <br />
        <div>
          <label>Description</label>
          <TextArea
            type="text"
            rows={4}
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" disabled={buttonDisabled}>Add Project</button>
      </form>
    </div>
  );
}

export default AddProject;
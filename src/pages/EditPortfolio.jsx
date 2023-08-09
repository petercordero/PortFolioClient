import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosDelete, post, get } from "../services/authService";
import { Input, Divider } from "antd";
import { fileChange } from "../services/fileChange";

function EditPortfolio() {
  const [portfolio, setPortfolio] = useState(null);
  const [projects, setProjects] = useState(null)
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const { portfolioId } = useParams();
  const navigate = useNavigate();
  const { TextArea } = Input;

  useEffect(() => {
    get(`/portfolios/portfolio/${portfolioId}`)
      .then((response) => {
        const onePortfolio = response.data;
        setTitle(onePortfolio.title);
        setImage(onePortfolio.image);
        setPortfolio(onePortfolio)
        setProjects(onePortfolio.projects)
        console.log('projects stusgfsgfsd', onePortfolio.projects)
      })
      .catch((error) => console.log(error));

  }, [portfolioId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, image };
    post(`/portfolios/portfolio/edit/${portfolioId}`, requestBody)
      .then((updatedPortfolio) => {
        console.log("Updated", updatedPortfolio)
        navigate(`/portfolio/${portfolioId}`)
      });
  };

  const deletePortfolio = () => {
    axiosDelete(`/portfolios/delete-portfolio/${portfolioId}`)
      .then(() => {
        navigate("/all-portfolios");
      })
      .catch((err) => console.log(err));
  };

  const deleteProject = (projectId) => {
    axiosDelete(`/projects/delete-project/${portfolioId}/${projectId}`)
      .then(() => {
        navigate(`/portfolio/${portfolioId}`);
      })
      .catch((err) => console.log(err));
  };

  const handleProjectChange = (e, projectIndex) => {
    e.preventDefault()
    console.log("this", projects[projectIndex])
    post(`/projects/edit/${portfolioId}/${projects[projectIndex]._id}`, projects[projectIndex])
      .then((results) => {
        let newProjects = [...projects]
        newProjects[projectIndex] = results.data
        console.log("results", results)
        navigate(`/portfolio/${portfolioId}`)

      })
      .catch((error) => console.log(error));
  }

  const handleProjectInputChange = (e, projectIndex) => {
    console.log("Changing", projectIndex, e)
    let newProjects = [...projects]
    newProjects[projectIndex][e.target.name] = e.target.value
    console.log('New projects', newProjects)
    setProjects(newProjects)
  }

  const handleFileChange = (e, i) => {
    setButtonDisabled(true)
    fileChange(e)
      .then((response) => {
        setButtonDisabled(false)
        setProjects([...projects, projects[i].image = response.data.image])
        setImage(response.data.image)
      })
      .catch((err) => {
        console.log(err)
        setButtonDisabled(false)
      })
  }

  return (
    <div className="container">
      <Divider><h1>Edit Portfolio</h1></Divider>

      <button onClick={deletePortfolio}>Delete Portfolio</button>
      <br />

      {portfolio ?

        <form onSubmit={handleFormSubmit}>
          <label>Title</label>
          <Input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          <label>Cover Image</label>
          <Input
            type="file"
            name="image"
            onChange={handleFileChange}
          />
          <br />
          <br />
          <button type="submit">Submit Changes to Portfolio</button>
        </form>

        : <p>Loading...</p>

      }
      {projects &&
        projects.map((project, i) => (
          <div key={project._id}>
            <form className="container" onSubmit={(e) => handleProjectChange(e, i)}>
              <div className="project">
                <button onClick={() => deleteProject(project._id)}>Delete Project</button>
                <br />
                <br />
                <h3>{project.title}</h3>
                <h6><a href={project.link} target="_blank" >{project.link}</a></h6>
                <img src={project.image} style={{ width: "250px" }} alt="no image found" />
                <br />
                <br />
                <h6>{project.description}</h6>
                <Divider></Divider>
                <label>Title</label>
                <Input
                  type="text"
                  name="title"
                  value={project.title}
                  onChange={(e) => handleProjectInputChange(e, i)}
                />
                <br />
                <br />
                <label>Image</label>
                <Input
                  type="file"
                  name="image"
                  onChange={(e) => handleFileChange(e, i)}
                />
                <br />
                <br />
                <label>Link</label>
                <Input
                  type="text"
                  name="link"
                  value={project.link}
                  onChange={(e) => handleProjectInputChange(e, i)}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                  type="text"
                  name="description"
                  value={project.description}
                  onChange={(e) => handleProjectInputChange(e, i)}
                />
                <br />
                <br />
                <button type="submit" disabled={buttonDisabled}>Submit Changes to Project</button>
                <br />
              </div>
            </form>
          </div>
        ))}

    </div>
  );
}

export default EditPortfolio;
import { useParams, useNavigate } from "react-router-dom"; 
import { useState, useEffect } from "react";
import { axiosDelete, put, get } from "../services/authService";
import { Input, Divider } from "antd";

function EditPortfolio() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const { portfolioId } = useParams();
  const navigate = useNavigate(); 

  useEffect(() => {                                
    get(`/portfolios/portfolio/${portfolioId}`)
      .then((response) => {
        const onePortfolio = response.data;
        setTitle(onePortfolio.title);
        setImage(onePortfolio.image);
      })
      .catch((error) => console.log(error));
    
  }, [portfolioId]);

  const handleFormSubmit = (e) => {                    
    e.preventDefault();
    const requestBody = { title, image };
 
    put(`/portfolios/portfolio/edit/${portfolioId}`, requestBody)
      .then((response) => {
        console.log("Updated", response.data)
        navigate(`/portfolios/portfolio/${portfolioId}`)
      });
  };

  const deletePortfolio = () => {                  
    axiosDelete(`/portfolios/delete-portfolio/${portfolioId}`)
      .then(() => {
        navigate("/all-portfolios");
      })
      .catch((err) => console.log(err));
  };  
  
  return (
    <div className="container">
     <Divider><h1>Edit Portfolio</h1></Divider>

        <button onClick={deletePortfolio}>Delete Portfolio</button>
        <br />
      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <Input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label>Image:</label>
        <Input
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
<br />
<br />
        <button type="submit">Submit Changes</button>
      </form>

    </div>
  );
}

export default EditPortfolio;
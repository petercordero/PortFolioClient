import { useState, useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { post } from "../services/authService"
import { useNavigate } from "react-router-dom"

const NewPortfolio = () => {

    const [portfolio, setPortfolio] = useState({
        image: "",
        title: "",
    })

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        post('/portfolios/new-portfolio', portfolio)
        .then((newPortfolio) => {
            console.log("New Portfolio", newPortfolio)
            navigate('/portfolio-details/:portfolioId')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleTextChange = (e) => {
        setPortfolio((prev) => ({...prev, [e.target.name]: e.target.value}))
      }

  return (
    <div>
        <h1>New Portfolio</h1>
        <form onSubmit={handleSubmit}>
        <label>Cover Image:</label>
            <input type="text" name="image" onChange={handleTextChange}/>
        <label>Title:</label>
            <input type="text" name="title" onChange={handleTextChange}/>
        <br />
        <button type="submit">Create Portfolio</button>
        
        </form>
        </div>
  )
}

export default NewPortfolio
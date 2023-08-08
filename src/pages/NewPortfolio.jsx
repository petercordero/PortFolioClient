import { useState, useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { post } from "../services/authService"
import { useNavigate } from "react-router-dom"
import { Divider, Input } from "antd"

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
            navigate(`/portfolio/${newPortfolio.data._id}`)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleTextChange = (e) => {
        setPortfolio((prev) => ({...prev, [e.target.name]: e.target.value}))
      }

  return (
    <div className="container">
        <Divider><h1>New Portfolio</h1></Divider>
        <form onSubmit={handleSubmit}>
            <div>
        <label>Title&nbsp;</label>
            <Input type="text" name="title" onChange={handleTextChange}/>
            </div>
            <br />
            <div>
        <label>Cover Image&nbsp;</label>
            <Input type="text" name="image" onChange={handleTextChange}/>
            </div>
            <br />
        <button type="submit">Create Portfolio</button>
        
        </form>
        </div>
  )
}

export default NewPortfolio
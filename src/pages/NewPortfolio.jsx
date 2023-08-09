import { useState, useContext } from "react"
import { post } from "../services/authService"
import { useNavigate } from "react-router-dom"
import { Divider, Input } from "antd"
import { fileChange } from "../services/fileChange"

const NewPortfolio = () => {
    const [buttonDisabled, setButtonDisabled] = useState(false)
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
        setPortfolio((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleFileChange = (e) => {
        setButtonDisabled(true)
        fileChange(e)
        .then((response) => {
            setButtonDisabled(false)
            setPortfolio((prev) => ({ ...prev, [e.target.name]: response.data.image }))
        })
        .catch((err) => {
            console.log(err)
            setButtonDisabled(false)
        })
    }

    return (
        <div className="container">
            <Divider><h1>New Portfolio</h1></Divider>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <Input type="text" name="title" onChange={handleTextChange} />
                </div>
                <br />
                <div>
                    <label>Cover Image</label>
                    <Input type="file" name="image" onChange={handleFileChange} />
                </div>
                <br />
                <button type="submit" disabled={buttonDisabled}>Create Portfolio</button>

            </form>
        </div>
    )
}

export default NewPortfolio
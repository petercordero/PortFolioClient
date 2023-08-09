import { useState, useEffect, createContext } from "react";
import { get } from "../services/authService";

const PortfolioContext = createContext()

const getPortfolios = () => {
    get('/portfolios')
        .then((response) => {
            console.log("Portfolios", response.data)
            setPortfolios(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const PortfolioProvider = ({ children }) => {
    const [portfolios, setPortfolios] = useState([])

    return (
        <PortfolioContext.Provider value={{ portfolios, getPortfolios }}>
            {children}
        </PortfolioContext.Provider>
    )
}

export { PortfolioContext, PortfolioProvider }
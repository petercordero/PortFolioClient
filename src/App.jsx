import "./App.css";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import NewPortfolio from "./pages/NewPortfolio";
import AllPortfolios from "./pages/AllPortfolios";
import PortfolioDetails from "./pages/PortfolioDetails";
import AddProject from "./pages/AddProject";

function App() {

  const getToken = () => {
    return localStorage.getItem('authToken')
  }

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to='/login' />
  }

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to='/' />
  }

  return (
    <div className="App">
      
      <Navbar />
 
      <Routes>      
        <Route path="/" element={ <Homepage /> } />
        <Route path="/all-portfolios" element={<AllPortfolios/>}/>
        <Route path="/portfolio/:portfolioId" element={<PortfolioDetails/>}/>

        <Route element={<LoggedIn />}>
        <Route path="/new-portfolio" element={<NewPortfolio />} />
        <Route path="/add-project" element={<AddProject/>}/>
        </Route>

        <Route element={<NotLoggedIn />}>

          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

        </Route>

      </Routes>
      
    </div>
  );
}
export default App;

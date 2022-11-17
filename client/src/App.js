import { useState } from "react";
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    
    const [page, setPage] = useState('login');
    
    return(
        <div className="main_div">
            <div className="Centre_div">
            {page === 'register' ? <Register /> : <Login />}
            <button className="button" onClick={() => {setPage("register")}}>register</button>
            <button className="button" onClick={() => {setPage("login")}}>login</button>
            </div>
            
        </div>
    )
}

export default App;

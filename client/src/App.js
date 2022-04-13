import { useState } from "react";
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    
    const [page, setPage] = useState('login');
    
    return(
        <div className="app">
            {page === 'register' ? 

            <Register /> : <Login />
}

<button onClick={() => {
    setPage("register")
}}>register</button>
<button onClick={() => {
    setPage("login")
}}>login</button>

        </div>
    )
}

export default App;

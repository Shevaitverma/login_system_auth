import { useState } from "react";
import './App.css';

function App() {
    const [registerName, setRegisterName] = useState("")
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [page, setPage] = useState('login');

    const register = async (event) =>{
        event.preventDefault();


        const response = await fetch("http://localhost:5000/user/register",{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                registerName,
                registerEmail,
                registerPassword,
            }),
        });
        const data = await response.json()
        console.log(data);
    }


    const login = async (event)=>{
        event.preventDefault();

        const response = await fetch("http://localhost:5000/user/login",{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                loginEmail,
                loginPassword,
            }),
        });
        const data = await response.json()
        console.log(data);
    }
    
    return(
        <div className="app">
            {page === 'register' ? <div>
                <h3>Regester User</h3>
                <br/>
                <input 
                    placeholder="Name"
                    onChange={(event) => {
                        setRegisterName(event.target.value);
                    }}
                />
                <br/>
                <input 
                    placeholder="Email"
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}
                />
                <br/>
                <input 
                    type="password"
                    placeholder="Password"
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}
                />
                <br/>
                <button onClick={register}>Create User</button>
            </div>

            :

            <div>
                <h3> Login </h3>
                <br/>
                <input
                    placeholder="Email"
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                />
                <br/>
                <input
                    placeholder="Pasword"
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                />
                <br/>
                <button onClick={login}> Login</button>
            </div>
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

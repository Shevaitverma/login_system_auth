import { useState } from "react";

const Login = () =>{

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    

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
        <>
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
        </>
    )
}

export default Login;
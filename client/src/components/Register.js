import { useState } from "react";

const Register = () =>{

    const [registerName, setRegisterName] = useState("")
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");


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
    


    return(
        <>
        <div className="register">
                    <h3 className="logo">Regester User</h3>
                    <br/>
                    <input className="input"
                        placeholder="Name"
                        onChange={(event) => {
                            setRegisterName(event.target.value);
                        }}
                    />
                    <br/>
                    <input className="input"
                        placeholder="Email"
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                    />
                    <br/>
                    <input className="input"
                        type="password"
                        placeholder="Password"
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                    />
                    <br/>
                    <button className="registerButton" onClick={register}>Create User</button>
                </div>
        </>
    )
}

export default Register;
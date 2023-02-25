import React, { useState } from "react";

const Form = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const handleChangeUsername = (e) =>{
        setUserName(e.target.value)
    }
    const handleChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    const sendData = () => {
        const data = {
            userName,
            password
        }
        console.log(data)
    }

    return(
        <div className="form">
            <div className="form-content">
            <input type="text" onChange={handleChangeUsername}/>
            <input type="password" onChange={handleChangePassword} />
            <button className="primary" title = "Login" onClick={sendData}/>
            </div>
        </div>
    )
}
export default Form;
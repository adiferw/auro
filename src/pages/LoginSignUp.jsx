import React, {useState} from "react"
import "../styles/LoginSignUp.css"

import user_icon from "../assets/LoginSignUp/person.png"
import email_icon from "../assets/LoginSignUp/email.png"
import password_icon from "../assets/LoginSignUp/password.png"

const LoginSignUp = () => {

    const [action, setAction] = useState("Belépés");
    
  return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Belépés"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Felhasználónév"/>
            </div>}
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="Email cím"/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Jelszó"/>
            </div>
        </div>
        {action==="Regisztráció"?<div></div>:<div className="forgot-password">
            <span>Elfelejtettem a jelszavam</span>
        </div>}
        <div className="submit-container">
            <div className={action==="Belépés"?"submit gray":"submit"} onClick={()=>{setAction("Regisztráció")}}>Regisztráció</div>
            <div className={action==="Regisztráció"?"submit gray":"submit"} onClick={()=>{setAction("Belépés")}}>Belépés</div>
        </div>
    </div>
  )
}

export default LoginSignUp

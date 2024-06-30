import { useState } from "react";
import { validate } from "uuid";

function Loginform(props){

    const unblurDisplay = (event)=> {
        var x = document.getElementById("overlay");
        x.style.display = "none";
    }

    const handleUsernameChange = (event)=>{
        setUser({...user,username:event.target.value})
    }
    const handlePasswordChange = (event)=>{
        setUser({...user,password:event.target.value})
    }

    const [user, setUser] = useState({
        "username" : '',
        "password" : ''
    })


    return(
        <div id="loginform">
            <img src="close.png" className="close" onClick={unblurDisplay}></img>
            <input type="text" onChange={handleUsernameChange} value={user.username} />
            <input type = "password"  onChange={handlePasswordChange} value ={user.password}/>
        </div>
    )
}

export default Loginform
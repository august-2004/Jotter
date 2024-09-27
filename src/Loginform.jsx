import { useState } from "react";

function Loginform({setUsername,setIsLoggedIn}){

    const [user, setUser] = useState({
        "username" : '',
        "password" : ''
    })
    const [errorMessage, setErrorMessage] = useState('');


    const handleUsernameChange = (event)=>{
        setUser({...user,username:event.target.value})
    }
    const handlePasswordChange = (event)=>{
        setUser({...user,password:event.target.value})
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try {
            console.log(user)
            const response = await fetch('https://jotter-back-end.vercel.app/login', {
              method: 'POST',
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: user.username,
                password: user.password,
              }),
            });
            

            const body1 = await response.json();
            setUsername(body1.username);
            setIsLoggedIn(body1.isLoggedIn);
            
      
          } catch (error) {
            console.error( error);
            setErrorMessage('Login failed. Please check your credentials.');
          }
        };
    

    


    return(
        <form id="loginform" onSubmit={handleSubmit} method="post" >
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <input type="text" onChange={handleUsernameChange} value={user.username} required />
            <input type = "password"  onChange={handlePasswordChange} value ={user.password} required />
            <button type="submit" formMethod="post">Login</button>
        </form>
    )
}

export default Loginform
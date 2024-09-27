import { useEffect, useState } from 'react'
import './App.css'
import Notegen from './Notegen'
import NoteAdder from './Newnote';
import Navbar from './Navbar';
import Loginform from './Loginform';

function App() {
    const [noteArray,setNotearray] = useState([]);
    const [username, setUsername] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
      useEffect( () => {
        fetchData();
     }, []);

    const fetchData = async ()=>
    {
      const response = await fetch('jotter-back-end.vercel.app/',{
        method: 'POST',
        credentials: 'include',
        body : {
          username
        }
      })
      if(response.ok){
        const body = await response.json();
        console.log(body)
        console.log("hey")
        setUsername(body.username);
        setNotearray(body.noteArray);
        console.log(isLoggedIn)
      }
    }

   
      return(      
      <div className= "app">
        <Navbar isLoggedIn={isLoggedIn} username={username}></Navbar>
            {isLoggedIn ? (
                <div className ="notebox">
                    <div className='mainapp'>
                        {/* <Notegen noteArray = {noteArray}></Notegen> */}
                    </div>
                </div>
                 )
          :          
            (<div><Loginform setUsername={setUsername} setIsLoggedIn={setIsLoggedIn}></Loginform></div>)
    }
          </div>
        
      )
    }




export default App

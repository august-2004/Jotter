import { useEffect, useState } from 'react'
import './App.css'
import Notegen from './Notegen'
import NoteAdder from './Newnote';
import Navbar from './Navbar';
import Loginform from './Loginform';

function App() {
    const [noteArray,setNotearray] = useState([]);
    const [username, setUsername] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    useEffect(()=>{
      checkLoginStatus();
    },[])

    const checkLoginStatus = async ()=>{
      const response = await fetch("https://jotter-backend.netlify.app/getnote",{
        method : 'POST',
        credentials: 'include'
      });
      
      if(response.ok){
        const body = await response.json();
        setUsername(body.username);
        setNotearray(body.noteArray.reverse());
        setIsLoggedIn(true);
      }
      else{
        setIsLoggedIn(false);
      }


    }

   
      return(      
      <div className= "app">
        <Navbar isLoggedIn={isLoggedIn} username={username}></Navbar>
            {isLoggedIn ? (
                <div className ="notebox">
                    <div className='mainapp'>
                        <NoteAdder setNotearray={setNotearray}></NoteAdder>
                        <Notegen noteArray = {noteArray}></Notegen>
                    </div>
                </div>
                 )
          :          
            (<div><Loginform setUsername={setUsername} setIsLoggedIn={setIsLoggedIn} setNotearray={setNotearray}></Loginform></div>)
    }
          </div>
        
      )
    }




export default App

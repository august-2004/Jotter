import { useState } from 'react'
import './App.css'
import Notegen from './Notegen'


function App() {
    const [noteArray,setNotearray] = useState([
        {
          heading: "Hell", para: "this issdfs a note"
        },
        {
          heading: "Hell", para: "this iasdssdfs a note"
        }
      ]);

      const addNewNote = () =>{
        
        let newNote = {
            heading: "Hello", para: "this new note"
          }  ;
          let updatedNoteArray = [newNote,...noteArray];
          setNotearray(updatedNoteArray);

      }
    return(
      <>
      <button onClick={addNewNote}>+</button>
      <Notegen noteArray = {noteArray}></Notegen>
      </>
    )
}



export default App

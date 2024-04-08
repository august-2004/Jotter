import { useState } from 'react'
import './App.css'
import Notegen from './Notegen'
import NoteAdder from './Newnote';

function App() {
    const [noteArray,setNotearray] = useState([
      ]);

      const addNewNote = (noteObject) =>{
          let updatedNoteArray = [noteObject,...noteArray];
          setNotearray(updatedNoteArray);

      }
    return(
      <>
      <NoteAdder addNewNote={addNewNote}></NoteAdder>
      <Notegen noteArray = {noteArray}></Notegen>
      </>
    )
}



export default App

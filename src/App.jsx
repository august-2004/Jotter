import { useEffect, useState } from 'react'
import './App.css'
import Notegen from './Notegen'
import NoteAdder from './Newnote';

function App() {
    const [noteArray,setNotearray] = useState([
      ]);
    
      useEffect(() => {
        fetchData();
     }, []);

    const fetchData = ()=>
    {
      fetch('https://jotter-back-end.vercel.app/getnote',{
        method: 'GET',
      }).then(res => res.json()).then(res =>{setNotearray(res.reverse())})
    }
    const addNewNote = (noteObject) =>{
        let updatedNoteArray = [noteObject,...noteArray];
        setNotearray(updatedNoteArray);
      }


    return(
      <div className='mainapp'>
      <NoteAdder  fetchData = {fetchData}></NoteAdder>
      <Notegen noteArray = {noteArray}></Notegen>
      </div>
    )
}



export default App

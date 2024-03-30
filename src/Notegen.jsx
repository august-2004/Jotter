
import NoteElement from './NoteElement.jsx'
import {v4 as uuidv4} from 'uuid'

function Notegen(props) {


return(

  <>{props.noteArray.map ((oneNote) => {
  return (
    <NoteElement  para={oneNote.para} heading ={oneNote.heading} key={uuidv4()} />
  )})
  }
  </>
)
  }
  export default Notegen
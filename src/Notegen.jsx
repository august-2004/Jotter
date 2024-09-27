
import NoteElement from './NoteElement.jsx'
import {v4 as uuidv4} from 'uuid'

function Notegen(props) {


return(

  <>{props.noteArray.map ((oneNote) => {
  return (
    <NoteElement  para={oneNote.body} heading ={oneNote.heading} key={oneNote._id} />
  )})
  }
  </>
)
  }
  export default Notegen
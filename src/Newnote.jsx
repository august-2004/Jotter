import { useState } from "react"

function NoteAdder({addNewNote}){
    const [inputFields,setInputFields] = useState({heading:'',para:''})
    const handleHeadingChange = (event)=>{
       
        setInputFields({...inputFields,heading:event.target.value})
    }
    const handleNoteChange = (event)=>{
        
        setInputFields({...inputFields,para:event.target.value})
    }
    const handleSave = ()=>{
        if((inputFields.heading!='')&&(inputFields.para!='')){
        addNewNote(inputFields)
        setInputFields({heading:'',para:''});
        }
    }
    return(
    <>
        <div className="outline">
            <div className="boxy">
                <input  type="text" value={inputFields.heading} onChange={handleHeadingChange} className="heading" placeholder="Give a heading"></input>
                <input  type="text" value={inputFields.para} onChange={handleNoteChange} className="notes" placeholder="Jot it Down"></input>
                <button className="addbutton" onClick={handleSave}>+</button>
            </div>
        </div>
    </>)
}

export default NoteAdder
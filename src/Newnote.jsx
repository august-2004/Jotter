import { useState } from "react"

function NoteAdder({addNewNote}){
    const [inputFields,setInputFields] = useState({heading:'',para:''})
    const handleHeadingChange = (event)=>{
        setInputFields({...inputFields,heading:event.target.value})
    }
    const handleNoteChange = (event)=>{
        setInputFields({...inputFields,para:event.target.value})
    }
    const handleSave = (event)=>{
        if((inputFields.heading!='')&&(inputFields.para!='')&&(inputFields.para!='\n')){
        addNewNote(inputFields)
        setInputFields({heading:'',para:''});
        event.target.previousSibling.focus();
        event.target.placeholder="Jot it Down"
        
        }
    }
    const nextField = (event) =>{
        if(event.key ==='Enter')
        {
            event.target.nextSibling.focus();
        }
    }

    return(
    
        
            <div className="boxy">
                <input  type="text" value={inputFields.heading} onChange={handleHeadingChange} onKeyDown={nextField} className="heading headinginput" placeholder="Give a heading"></input>
                <textarea  type="text" value={inputFields.para} onFocus={(event)=>{
                    event.target.placeholder="";
                    event.target.focus()}} onChange={handleNoteChange} onKeyDown={event => {
                if (event.key === 'Enter') {
                  handleSave(event);
                  
                }
              }} className="notes notesinput" placeholder="Jot it Down"></textarea>
                {/* <button className="addbutton" onClick={handleSave}>+</button> */}
            </div>
        
    )
}

export default NoteAdder
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
        if((inputFields.heading!='')&&(inputFields.para!='')){
        addNewNote(inputFields)
        setInputFields({heading:'',para:''});
        event.target.previousSibling.focus();
        event.target.placeholder="Jot it Down";
        }
        else{
            event.preventDefault();
        }
    }
    const nextField = (event) =>{
        if(event.key ==='Enter')
        {
            event.preventDefault();
            event.target.nextSibling.focus();
        }
    }

    return(
    
        
            <div className="boxy">
            <form onSubmit={(e)=> e.preventDefault() }>
                <input  type="text" value={inputFields.heading} onChange={handleHeadingChange} onKeyDown={nextField} className="heading headinginput" placeholder="Give a heading"></input>
                <textarea  type="text" value={inputFields.para} onFocus={(event)=>{
                    event.target.placeholder="";
                    event.target.focus()}} onChange={handleNoteChange} className="notes notesinput" placeholder="Jot it Down"></textarea>
                <button className="addbutton" type='submit'  onClick={handleSave}>&#10003; </button>
                </form>
            </div>
        
    )
}

export default NoteAdder
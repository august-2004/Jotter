import { useState } from "react"

function NoteAdder({fetchData}){
    const [inputFields,setInputFields] = useState({heading:'',para:''})

   
    
    const PostData = async (event) =>{
        let currentInput = inputFields
        setInputFields({heading:'',para:''});
        event.target.previousSibling.focus();
        event.target.placeholder="Jot it Down";
        fetch('https://jotter-back-end.vercel.app/postnote',
            {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(currentInput)
            })
        .then(console.log(Response))
        .then(()=>{
            fetchData();
            })
        }

    const handleHeadingChange = (event)=>{
        setInputFields({...inputFields,heading:event.target.value})
    }
    const handleNoteChange = (event)=>{
        setInputFields({...inputFields,para:event.target.value})
    }
    const handleSave = async(event)=>{
        if((inputFields.heading!='')&&(inputFields.para!='')){
        await PostData(event)
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
            <form  onSubmit={(e)=> e.preventDefault() }>
                <input  type="text" value={inputFields.heading} onChange={handleHeadingChange} onKeyDown={nextField} className="heading headinginput" placeholder="Give a heading"></input>
                <textarea  type="text" value={inputFields.para} onFocus={(event)=>{
                    event.target.placeholder="";
                    event.target.focus()}} onChange={handleNoteChange} className="notes notesinput" placeholder="Jot it Down"></textarea>
                <button className="addbutton" type='submit'  onClick={handleSave}>+</button>
                </form>
            </div>
        
    )
}

export default NoteAdder
import { useState } from "react"

function NoteAdder({setNotearray}){
    const [inputFields,setInputFields] = useState({heading:'',para:''})

   
    
    const PostData = async (event) =>{
        let currentInput = inputFields
        setInputFields({heading:'',para:''});
        event.target.previousSibling.focus();
        event.target.placeholder="Jot it Down";
        console.log(currentInput);

        try{
        const response = await fetch('https://jotter-back-end.vercel.app/postnote',
                {
                    method: "POST",
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        heading : currentInput.heading,
                        body: currentInput.para
                        })
                }
            )
            if (response.ok) {
                const body = await response.json(); 
                setNotearray(body.noteArray.reverse()); 
                console.log(body.noteArray);
            }
        }
        catch(error){
                console.log(error);
        }
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
            <form  className="boxy adder"onSubmit={(e)=> e.preventDefault() }>
                <input  type="text" value={inputFields.heading} onChange={handleHeadingChange} onKeyDown={nextField} className="heading headinginput" placeholder="Give a heading"></input>
                <textarea  type="text" value={inputFields.para} onFocus={(event)=>{
                    event.target.placeholder="";
                    event.target.focus()}} onChange={handleNoteChange} className="notes notesinput" placeholder="Jot it Down"></textarea>
                <img src="plus.png" className="addbutton" type='submit'  onClick={handleSave}></img>
                </form>
            
        
    )
}

export default NoteAdder
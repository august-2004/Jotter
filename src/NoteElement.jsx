/* eslint-disable react/prop-types */
function NoteElement(props){
    return(

        
            <div className="boxy">
                <div className="heading">{props.heading}</div>
                <div className="notes">{props.para}</div>
            </div>
        
    )
}

export default NoteElement
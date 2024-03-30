function NoteElement(props){
    return(
    <>
        <div className="outline">
            <div className="boxy">
                <div className="heading">{props.heading}</div>
                <div className="notes">{props.para}</div>
            </div>
        </div>
    </>)
}

export default NoteElement
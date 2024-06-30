function Navbar(){

    const blurDisplay = (event)=> {
        var x = document.getElementById("overlay");
        x.style.display = "flex";
    }


    return(
        <nav className ="topbar">
        <img id="menu" src="Jotter.png"></img>
        <p className="title"></p>
        <img onClick={blurDisplay} id="user" src="user.png"></img>
        
        </nav>
    )
}

export default Navbar
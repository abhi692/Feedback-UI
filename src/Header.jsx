
function Header(props) {
  return (
    <header style={{backgroundColor: "rgba(0,0,0,0.4)", color: "#ff6a95"}}>
            <div className="container">   
        <h1>{props.text}Feedback UI</h1>
    </div>
    </header>
  )
}

export default Header
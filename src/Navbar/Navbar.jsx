import ReactDOM from "react-dom";
import "./Navbar.css";
function clock(){
  var year=new Date().getFullYear();
  var month = new Date().getMonth();
  var day = new Date().getDay();
  var hrs = new Date().getHours();
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();
  ReactDOM.render(
    <div><p style={{fontFamily: "'Permanent Marker', cursive"}}>{day+"-"+month+"-"+year+" | "+hrs+":"+min+":"+sec}</p></div>,document.querySelector(".profile")
  )
}

setInterval(clock,1000)

function Navbar(){
  return (
    <div className="NavbarBod">
        <div className="profile" onLoad={clock}></div>
        <div className="Notesandico">
          <div className="ico"></div>
          <p style={{fontSize:"125%",display:"inline",marginRight:"15px",float:"right",color:"#185ADB",fontFamily: "'Permanent Marker', cursive"}}>NOTES</p>
        </div>
    </div>
  )
}
export default Navbar;

import React from "react";
import ReactDOM from "react-dom";
import "./Note.css";
import "./MainCon.css";
//function createNote(){
//  const [note,setNote]
//}
var bg;
function Note(props){
  function handleClick() {
    props.onDelete(props.id);
  }
  function changebgcolor(event,props){
    event.preventDefault();
    const nnbod= document.querySelector(".NewNoteBod");
    const no = document.querySelector(".note");
    if((typeof(nnbod)!=="undefined")&&(nnbod!==null))
    {
      console.log(event.target.id)
      if (event.target.className==="NewNoteBodBtnlightgreen"){
        document.querySelector('#'+event.target.id).style.backgroundColor="#76B39D";
      }
      if (event.target.className==="NewNoteBodBtnlightblue"){
        document.querySelector('#'+event.target.id).style.backgroundColor="#1DCED8";
      }
      if (event.target.className==="NewNoteBodBtnlightorange"){
        document.querySelector('#'+event.target.id).style.backgroundColor="#FF9900";
      }
      if (event.target.className==="NewNoteBodBtnlightred"){
        document.querySelector('#'+event.target.id).style.backgroundColor="#EA5455";
      }
      if (event.target.className==="NewNoteBodBtnlightpink"){
        document.querySelector('#'+event.target.id).style.backgroundColor="#FD367E";
      }
      if (event.target.className==="NewNoteBodBtnlightcream"){
        document.querySelector('#'+event.target.id).style.backgroundColor="#F8E2CF";
      }
      if (event.target.className==="NewNoteBodBtnwhite"){
        document.querySelector('#'+event.target.id).style.backgroundColor="white";
      }
    }
  }
  //React.useEffect(()=>{document.querySelector(".note").style.backgroundColor=props.bgc})
  return(
  <div className="note" id={"i"+props.id}>
      <h2 className="notehead1">{props.title}</h2>
      <p className="notep">{props.content}</p>
      <button className="notebttn" onClick={handleClick}>DELETE</button>
      <button className="NewNoteBodBtnlightgreen" id={"i"+props.id} onClick={changebgcolor}></button>
      <button className="NewNoteBodBtnlightblue" id={"i"+props.id} onClick={changebgcolor}></button>
      <button className="NewNoteBodBtnlightorange" id={"i"+props.id} onClick={changebgcolor}></button>
      <button className="NewNoteBodBtnlightred" id={"i"+props.id} onClick={changebgcolor}></button>
      <button className="NewNoteBodBtnlightpink" id={"i"+props.id} onClick={changebgcolor}></button>
      <button className="NewNoteBodBtnlightcream" id={"i"+props.id} onClick={changebgcolor}></button>
      <button className="NewNoteBodBtnwhite" id={"i"+props.id} onClick={changebgcolor}></button>
    </div>)
}
function NoteComp(props){
  const [note,setNote]=React.useState({
    title:"",
    content:"",
  })

  function handleChange(event){
    const {name,value}=event.target;
    setNote(prevNote=>{
      return {
        ...prevNote,
        [name]:value
      }
    })
    console.log({name,value})
  }

  function submitNote(event){
    props.onAdd(note);
    event.preventDefault();
  }


  return (
    <form className="NewNoteBod">
      <input className="NewNoteTitle" onChange={handleChange}  value={note.title} spellCheck="false" name="title" placeholder="Title" />
      <textarea className="NewNoteTxt" onChange={handleChange} value={note.content} spellCheck="false" name="content" placeholder="Take a note..." rows="3" />
      <button className="NewNoteBodBtn" onClick={submitNote}>Add</button>

    </form>
  )
};

function MainCon(){
  const [notes,setNotes]=React.useState([]);
  function addNote(note){
    setNotes(prevNotes=>{
      return [...prevNotes,note];
    });

  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div className="MainBod">
    <NoteComp onAdd={addNote} />
    {notes.map((noteItem,index)=>{
      return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>})
    }
    <div className="AllNotes"></div>
    </div>
  )


};
export default MainCon;

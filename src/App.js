import './App.css';
import './Components/Note.jsx'
import Note from './Components/Note.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import CreateArea from './Components/CreateArea.jsx'
import {useState} from "react";
// import notes from './notes.js'

function App() {

  const [notes, setNotes] = useState([])

  function addNote(contents){
    setNotes(prevNotes=>{
      return [...prevNotes, contents]
    })
  }

  function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((note, index)=>{
        return index!==id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote}/>
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {/* {notes.map(note=>{
        return(
          <Note 
            key={note.key}
            title={note.title} 
            content={note.content}
          />
        )
      })} */}
      {notes.map((note, index)=>{
        return(
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            check={deleteNote}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;

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

  function addNotes(contents){
    setNotes(prevNotes=>{
      return [...prevNotes, contents]
    })
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNotes}/>
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
      {notes.map(note=>{
        return(
          <Note
            key={note.key}
            title={note.title}
            content={note.content}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;

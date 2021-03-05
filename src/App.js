import './App.css';
import './Components/Note.jsx'
import Note from './Components/Note.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import CreateArea from './Components/CreateArea.jsx'
// import notes from './notes.js'

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note key={1} title="Note title" content="Note content" />
      {/* {notes.map(note=>{
        return(
          <Note 
            key={note.key}
            title={note.title} 
            content={note.content}
          />
        )
      })} */}
      <Footer />
    </div>
  );
}

export default App;

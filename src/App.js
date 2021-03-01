import './App.css';
import './Components/Note.jsx'
import Note from './Components/Note.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import notes from './notes.js'

function App() {
  return (
    <div>
      <Header />
      {notes.map(note=>{
        return(
          <Note title={note.title} content={note.content}/>
        )
      })}
      
      <Footer />
    </div>
  );
}

export default App;

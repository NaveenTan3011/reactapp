import './App.css';
import {BrowserRouter} from "react-router-dom"
import First from './First';
import NoteState from './context/NoteState';

function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>
    <First/>
    </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;

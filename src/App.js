import './App.css';
import {BrowserRouter} from "react-router-dom"
import First from './First';
import NoteState from './context/NoteState';
import { Provider } from 'react-redux'; // Import the Provider component
import store from './reducer/store'; // Import your Redux store

function App() {
  return (
    <>
    <Provider store={store}>
    <NoteState>
    <BrowserRouter>
    <First/>
    </BrowserRouter>
    </NoteState>
    </Provider>
    </>
  );
}

export default App;

import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    const [state , setState] = useState('hey');
    }
    <NoteContext.Provider value={}>
        {props.children}
    </NoteContext.Provider>

}

export default NoteState
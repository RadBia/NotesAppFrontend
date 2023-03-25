import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

function Note({id, l1, l2, l3, l4, l5, title, content}) {
    const navigate = useNavigate();
    const [hide, sethide] = useState(false)
    let id_ = id;

    const deleteNote = () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('http://localhost:8080/api/notes/' + id_ , requestOptions)
            // .then(response => response.json())
            .then(data => {
                if(data.status == 204) sethide(true)
        })
    }
    return (
        <div className={hide == true ? "note hide" : "note"}>
            <div className="labels">
                {l2 == true ? <span className="label-2">
                    Bardzo ważne
                </span> : ""}

                {l1 == true ? <span className="label-1">
                    Ważne
                </span> : ""}

                {l3 == true ? <span className="label-3">
                    Podróż
                </span> : ""}

                {l4 == true ? <span className="label-4">
                    Praca
                </span> : ""}

                {l5 == true ? <span className="label-5">
                    Zakupy
                </span> : ""}
            </div>
            <h3 className="title">{title}</h3>
            <div className="content">{content}</div>
            <div className="note-panel">
                <span onClick={() => navigate("/"+id+"/edit")} className="edit"> <img src="edit.png" alt="edit"/> </span>
                <span onClick={() => deleteNote()} className="delete"> <img src="delete.png" alt="delete"/> </span>
            </div>
        </div>
    );
}

export default Note;
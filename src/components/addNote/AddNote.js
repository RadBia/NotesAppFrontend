import React from 'react';
import { useNavigate } from "react-router-dom";

function AddNote(props) {
    const navigate = useNavigate();

    const AddNote_ = (e) => {
        e.preventDefault();
        console.log('id', parseInt(localStorage.getItem('id')))
        const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id: localStorage.getItem('id'),
                    title: e.target.title.value,
                    content: e.target.content.value,
                    veryimportant: e.target.veryimportant.checked,
                    important: e.target.important.checked,
                    travel: e.target.travel.checked,
                    work: e.target.work.checked,
                    shopping: e.target.shopping.checked,
                })
        };
            fetch('http://localhost:8080/api/notes/create', requestOptions)
                .then(response => response.json())
                .then(data => {console.log(data)
                    alert('Dodano post!')
                    navigate('/');
                });
    };

    return (
        <div className="add-panel-wrapper">
            <div className="container">
                <div className="add-panel">
                    <h4>Dodaj notatkę</h4>
                    <form onSubmit={(e) => AddNote_(e)}>
                        <div className="title-wrapp">
                            <label htmlFor="title">Tytuł notatki:</label>
                            <input type="text" name="title" id="title"/>
                        </div>
                        <div className="content-wrapp">
                            <label htmlFor="content">Treść notatki:</label>
                            <textarea type="text" name="content" id="content"/>
                        </div>
                        <div>
                            <label className="labels" htmlFor="content">Etykiety:</label>
                        </div>
                        <div className="checkbox-wrapp">
                            <input type="checkbox" id="veryimportant" name="veryimportant" />
                            <label className="label-2" htmlFor="veryimportant">Bardzo ważne</label>
                        </div>
                        <div className="checkbox-wrapp">
                            <input type="checkbox" id="important" name="important" />
                            <label className="label-1" htmlFor="important">Ważne</label>
                        </div>
                        <div className="checkbox-wrapp">
                            <input type="checkbox" id="travel" name="travel" />
                            <label className="label-3" htmlFor="travel">Podróż</label>
                        </div>
                        <div className="checkbox-wrapp">
                            <input type="checkbox" id="work" name="work" />
                            <label className="label-4" htmlFor="work">Praca</label>
                        </div>
                        <div className="checkbox-wrapp">
                            <input type="checkbox" id="shopping" name="shopping" />
                            <label className="label-5" htmlFor="shopping">Zakupy</label>
                        </div>
                        <input type="submit" value="Dodaj"/>
                        <div className="clear"></div>
                    </form>
                    <div className="info">
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNote;
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

function EditNote(props) {
    const [state, setstate] = useState({
        title: '',
        content: '',
        veryimportant: false,
        important: false,
        work: false,
        travel: false,
        shopping: false
    })
    const navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        function getData() {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch('http://localhost:8080/api/notes/'+id, requestOptions)
                .then(response => response.json())
                .then(data => {
                    setstate({
                        title: data.title,
                        content: data.content,
                        veryimportant: data.veryimportant,
                        important: data.important,
                        work: data.work,
                        travel: data.travel,
                        shopping: data.shopping
                    });
                });
            }

        getData();

    }, [])

    const update = (e) => {
        e.preventDefault();
        console.log('st', state)
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
                title: state.title,
                content: state.content,
                veryimportant: state.veryimportant,
                important: state.important,
                travel: state.travel,
                work: state.work,
                shopping: state.shopping
            }),
        };
        fetch('http://localhost:8080/api/notes/' + id, requestOptions)
            // .then(response => response.json())
            .then(data => {
                navigate('/');
            });
    }

    const input = (e) => {
        let name = e.target.name;
        let new_state = {...state};
        console.log(e.target.checked)
        new_state[name] = e.target.value == "on" ? e.target.checked : e.target.value;
        setstate({
            ...new_state,
        });
    }

    return (
        <div className="add-panel-wrapper">
            <div className="container">
                <div className="add-panel">
                    <h4>Edytuj notatkę</h4>
                    <form onSubmit={(e) => update(e)}>
                        <div className="title-wrapp">
                            <label htmlFor="title">Tytuł notatki:</label>
                            <input onChange={(e) => input(e)} type="text" name="title" id="title" value={state.title} />
                        </div>
                        <div className="content-wrapp">
                            <label htmlFor="content">Treść notatki:</label>
                            <textarea onChange={(e) => input(e)} type="text" name="content" id="content" value={state.content} />
                        </div>
                        <div>
                            <label className="labels" htmlFor="content">Etykiety:</label>
                        </div>
                        <div className="checkbox-wrapp">
                            <input onChange={(e) => input(e)} checked={state.veryimportant == true ? true : false} type="checkbox" id="veryimportant" name="veryimportant" />
                            <label className="label-2" htmlFor="veryimportant">Bardzo ważne</label>
                        </div>
                        <div className="checkbox-wrapp">
                            <input onChange={(e) => input(e)} checked={state.veryimportant == true ? true : false} checked={state.important == true ? true : false}  type="checkbox" id="important" name="important" />
                            <label className="label-1" htmlFor="important">Ważne</label>
                        </div>
                        <div className="checkbox-wrapp">
                            <input onChange={(e) => input(e)} checked={state.veryimportant == true ? true : false} checked={state.travel == true ? true : false}  type="checkbox" id="travel" name="travel" />
                            <label className="label-3" htmlFor="travel">Podróż</label>
                        </div>
                        <div className="checkbox-wrapp">
                            <input onChange={(e) => input(e)} checked={state.veryimportant == true ? true : false} checked={state.work == true ? true : false}  type="checkbox" id="work" name="work" />
                            <label className="label-4" htmlFor="work">Praca</label>
                        </div>
                        <div className="checkbox-wrapp">
                            <input onChange={(e) => input(e)} checked={state.veryimportant == true ? true : false} checked={state.shopping == true ? true : false}  type="checkbox" id="shopping" name="shopping" />
                            <label className="label-5" htmlFor="shopping">Zakupy</label>
                        </div>
                        <input type="submit" value="Zaktualizuj notatkę"/>
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

export default EditNote;
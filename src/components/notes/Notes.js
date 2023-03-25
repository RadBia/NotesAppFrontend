import React, { useState, useEffect } from 'react';
import Note from '../note/Note';
import { Link, useNavigate } from 'react-router-dom';
import User from '../user/User';

function Notes(props) {

    const [state, setstate] = useState([]);
    const [users, setusers] = useState([]);
    const [privilage, setprivilage] = useState("user");
    const navigate = useNavigate();

    useEffect(() => {
        const GetList = () => {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch('http://localhost:8080/api/notes/user/'+localStorage.getItem('id'), requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setstate(data);
            });
        }

        const GetUsers = () => {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch('http://localhost:8080/api/user/list', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setusers(data);
                    setprivilage("admin");
            });
        }

        GetList();
        if(localStorage.getItem("privilage") == "admin") {
            console.log("Hello");
            GetUsers();
        }
    }, [])


    return (
                <>{
                    privilage == "admin" ? <>
                        <div className="notes-wrapper user-wrapper">
                            <h3>Lista osób zarejestrowanych</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th colspan="1">id</th>
                                        <th colspan="1">Adres e-mail</th>
                                        <th colspan="1">login</th>
                                        <th colspan="1">password</th>
                                        <th colspan="1">privilage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(i => <User id={i.id} email={i.email} login={i.login} pass={i.password} privilage={i.privilage} />)}
                                </tbody>
                            </table>
                        </div>
                    </> : ""
                }

            <div className="notes-wrapper">
                <Link to="/add"><button className="add-note-btn">Dodaj notatkę</button></Link>
                {state.length == 0 ? <div className="empty">Brak notatek</div> : state.map(i => {
                    return <Note
                                key={i.id}
                                id={i.id}
                                l1={i.important}
                                l2={i.veryimportant}
                                l3={i.travel}
                                l4={i.work}
                                l5={i.shopping}
                                title={i.title}
                                content={i.content} />
                })}
            </div>
        </>
    );
}

export default Notes;
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Nav({setIsLogged, setTheme, theme}) {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        setIsLogged(false);
        navigate('/');
    }

    const switch_ = (e) => {
        if(e.target.checked != undefined) {
            if(theme == true ) {
                localStorage.setItem('theme', String(false));
                setTheme(false);
            } else {
                localStorage.setItem('theme', String(true));
                setTheme(true);
            }
        }
    }

    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <span className="home"><Link to="/">Strona główna</Link></span>
                    <span className="header">NotesApp</span>
                    <label onClick={(e) => switch_(e)} className="switch">
                      <input type="checkbox"/>
                      <span className="slider round"></span>
                    </label>
                    <button onClick={() => logout()}>Wyloguj się</button>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
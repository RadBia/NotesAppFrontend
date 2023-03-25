import React from 'react';
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const Register_ = (e) => {
        e.preventDefault();

        if(e.target.login.value != "" && e.target.password.value != "" && (e.target.password.value == e.target.repassword.value) ) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ login: e.target.login.value, password: e.target.password.value, email: e.target.email.value})
            };
            fetch('http://localhost:8080/api/user/register', requestOptions)
                .then(response => response.json())
                .then(data => {console.log(data)
                    if(data.id != null ) {
                        alert("Zostałeś zarejestrowany. Następuje przekierowanie do panelu logowania!")
                        navigate("/");
                    } else {
                        alert("Użytkownik istnieje lub nie wypełniono wszystkich pól formularza!");
                    }
                });

        } else {
            alert("W formularzu występuje błąd! Wypełnij wszystkie pola!");
        }
    }
    return (
        <div className="login-wrapper">
            <div className="container">
                <div className="login-panel">
                    <h4>Zarejestruj się i stwórz zbiór notatek!</h4>
                    <form onSubmit={(e) => Register_(e)}>
                        <div>
                            <label htmlFor="email"><br/>Adres <br/> e-mail:</label>
                            <input type="email" name="email" id="email" required/>
                        </div>
                        <div>
                            <label htmlFor="login">Login:</label>
                            <input type="text" name="login" id="login" required/>
                        </div>
                        <div>
                            <label htmlFor="password">Hasło:</label>
                            <input type="password" name="password" id="password"/>
                        </div>
                        <div>
                            <label className="repassword" htmlFor="re">Powtórz hasło:</label>
                            <input type="password" name="repassword" id="repassword"/>
                        </div>
                        <input type="submit" value="Zarejestruj się"/>
                        <div className="clear"></div>
                    </form>
                    <div className="info">
                        <div className="clear"></div>
                        <span>Masz już konto? <b><Link to="/">Zaloguj się!</Link></b></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
import './App.css';
import {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Login from './components/login/Login';


function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [id, setid] = useState(localStorage.getItem('id'));
  const [theme, setTheme] = useState(true)
  let render;

  useEffect(() => {
    function checkLoginStatus() {
      if(id != null) {
        setIsLogged(true);
      }
    }

    function checkTheme() {
      let boolean_ = localStorage.getItem('theme');
      let res_ = false;
      if(boolean_ == "false") {
        res_ = false;
      } else {
        res_ = true;
      }
      setTheme(res_);
    }

    checkTheme();
    checkLoginStatus();
  }, []);

  let loggedContent = () => {return (<div className={theme == false ? "wrapper" : "dark wrapper"}>
                                         <div className="content">
                                          <Switch>
                                          </Switch>
                                        </div>
                                      </div>)};

  let notLoggedContent = () => {return (<div className="wrapper">
                                          <Switch>
                                          </Switch>
                                        </div>)};
  if(!isLogged) {
    render = notLoggedContent();
  } else {
    render = loggedContent();
  }



  return (
    <Router>
      { render }
    </Router>
  );
}

export default App;

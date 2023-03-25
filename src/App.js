import './App.css';
import {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Login from './components/login/Login';
import Nav from './components/nav/Nav';
import NotFound from './components/notFound/NotFound';
import Register from './components/register/Register';
import Notes from './components/notes/Notes';
import AddNote from './components/addNote/AddNote';
import EditNote from './components/editNote/EditNote';


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
                                        <Nav theme={theme} setTheme={setTheme} setIsLogged={setIsLogged} />
                                        <div className="content">
                                          <Switch>
                                            <Route exact path='/' element={<Notes />} />
                                            <Route exact path='/add' element={<AddNote />} />
                                            <Route exact path='/:id/edit' element={<EditNote />} />
                                            <Route path='*' element={<NotFound/>} />
                                          </Switch>
                                        </div>
                                      </div>)};

  let notLoggedContent = () => {return (<div className="wrapper">
                                          <Switch>
                                              <Route exact path='/' element={<Login setIsLogged={setIsLogged} />}/>
                                              <Route exact path='/register' element={<Register />}/>
                                              <Route path='*' element={<NotFound/>} />
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

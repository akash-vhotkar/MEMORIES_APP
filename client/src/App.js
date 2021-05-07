import './App.css';
import { useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Auth/login';
import Register from './Auth/register';
import Posts from './componant/Posts/posts';
import {getposts} from './actions/posts' 
import Form from './componant/Form/form';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getposts());
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <div className="App">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand">Memories app</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/"> Home   </Link>
                <Link to="/login" >  Login    </Link>
                <Link to="/register"> Register </Link>
              </div>
            </div>
          </nav>
          <Route exact path="/">
            <div class="container">
              <div class="row">
                <div class="col-md-9">
                  <Posts></Posts>

                </div>
                <div class="col-md-3">
                  <Form></Form>

                </div>
              </div>
            </div>

          </Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>

        </div>
      </Switch>
    </Router>
  );
}

export default App;

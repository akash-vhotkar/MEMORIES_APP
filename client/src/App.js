import './App.css';
import { useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Auth/login';
import Register from './Auth/register';
import Posts from './componant/Posts/posts';
import {getposts} from './actions/posts' ;
import Form from './componant/Form/form';
import Navbar from './navbar';
import {useHistory, BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react';
function App() {
  const dispatch = useDispatch();
  const [curruntid , setcurruntid ] = useState(null);
  
  useEffect(() => {
    dispatch(getposts());
  }, [dispatch, curruntid])
  

  
  return (
    <Router>
      <Switch>
        <div className="App">

          <Navbar></Navbar>
          <Route exact path="/">
            <div class="container">
              <div class="row">
                <div class="col-md-9">
                  <Posts curruntid ={curruntid} setcurruntid ={setcurruntid}></Posts>

                </div>
                <div class="col-md-3">
                  <Form curruntid ={curruntid} setcurruntid ={setcurruntid}></Form>

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

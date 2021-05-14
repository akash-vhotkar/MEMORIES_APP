import { useEffect ,useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory,Link,useLocation} from 'react-router-dom'
const Navbar = ()=>{

    const [user , setuser ] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  
  useEffect(()=>{
      const token = user?.token;
      setuser(JSON.parse(localStorage.getItem('profile')));

  },[location])


  function handellogput(){
    dispatch({type:"LOGOUT"})
    setuser(null);
    history.push('/');
  }

    return (
        <div className="navbar">
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
              <p>{user?.result ? user.result.name: ""}</p>
              </div>
            </div>
            <button onClick={ ()=>handellogput() } class="btn btn-primary">logout </button>
          </nav>

        </div>
    )
}

export default Navbar;
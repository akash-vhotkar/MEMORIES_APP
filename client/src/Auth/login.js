import GoogleLogin from 'react-google-login';
import { useDispatch} from 'react-redux'
import { toast } from 'react-toastify';
import { useHistory} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.min.css';
import { useState } from 'react';
import {login} from '../actions/posts'
const Login  = ()=>{
    toast.configure();
    const dispatch = useDispatch();
    const history = useHistory();

    
    function googlesunccess(res){
        toast("succcessfull login with google");
        const  result  = res?.profileObj;
        const token  = res?.tokenId;
        try{
            dispatch({type:"AUTH", data: { result,token}})
            history.push('/')
        }catch(err){
        if(err) console.log(err);
            }
    }
    function googlefail(res){
        toast("fail in google sigh in ")
        console.log(res);
      
    }
    const [userdata, setuserdata] = useState({email:'', password:""});
    function  handellogin(e){
        e.preventDefault();
        console.log("while login userdata is ", userdata);
        if(userdata.email==="") toast("enter proper email");
        else{
            dispatch(login(userdata, history));
        }
        
        
        
    }
    
    return (
        <div className="Login">
           <div className="container">
               <div class="row">
                   <div class="col-md-6">
                       <form onSubmit={handellogin}>
                           <h1>login herre </h1>
                           <div class="form-group">
                               <label>Enter your email</label>
                               <input type="text" placeholder="enter your email" class="form-control" value={userdata.email} onChange={(e)=>  setuserdata({...userdata, email: e.target.value})}/>
                           </div>
                           <div class="form-group">
                               <label>Enter your password</label>
                               <input type="password" placeholder="enter your password" class="form-control" value={userdata.password} onChange={(e)=> setuserdata({...userdata, password: e.target.value})} />
                           </div>
                           <div class="form-group">
                           <GoogleLogin
    clientId="621875633743-uf4a01l6lo33t1a9f0o8n1kt3sqgsedl.apps.googleusercontent.com"
    buttonText="Login with google"
    onSuccess={googlesunccess}
    onFailure={googlefail}
    cookiePolicy={'single_host_origin'}
  />

<input type="submit" value="login with google " class="btn btn-primary w-100 m-2"/>
                   
                           </div>
                           
                          
                       </form>
                   </div>
               </div>
               
           </div>
        </div>
    )
}
export default Login
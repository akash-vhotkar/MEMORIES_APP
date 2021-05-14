import {useState} from 'react'
import { register } from '../actions/posts';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
const Register = ()=>{
    toast.configure();
    const hisotory = useHistory();
    const dispatch =  useDispatch();
    const [userdata , setuserdata] = useState({name : '',email:'', password:'', comfirmpassword : ''});
    function handelregister(e){
        e.preventDefault();
        console.log("user is registering using thise   ", userdata);
        if(userdata.password !== userdata.comfirmpassword)  toast("password and confirm password doesnot match")
        else if(userdata.name=="") {
            toast("plese enter your username");
            setuserdata({...userdata, name :'',email:'', password:'', comfirmpassword:''})
        }
        else if(userdata.email=="") {
            toast("invalid email id")
            setuserdata({...userdata, name :'',email:'', password:'', comfirmpassword:''})
        }
        else{
            dispatch(register(userdata, hisotory));
        }
    }
    return (
        <div className="Register"> 
        
        <div className="container">
               <div class="row">
                   <div class="col-md-6">
                       <form onSubmit={handelregister}>
                           <h1>Register here </h1>
                           <div class="form-group">
                               <label>Enter your name</label>
                               <input type="text" value= {userdata.name} onChange= {(e)=>setuserdata({...userdata, name : e.target.value})} placeholder="enter your name" class="form-control"/>
                           </div>
                           
                           <div class="form-group">
                               <label>Enter your email</label>
                               <input type="email" value={userdata.email} placeholder="enter your email" onChange={(e)=> setuserdata({...userdata, email: e.target.value})} class="form-control"/>
                           </div>
                           <div class="form-group">
                               <label>Enter your password</label>
                               <input type="password" value={userdata.password} placeholder="enter your password" class="form-control" onChange={(e)=>  setuserdata({...userdata, password: e.target.value})} />
                           </div>
                           <div class="form-group">
                               <label>Enter your confirm password</label>
                               <input type="password" value={userdata.comfirmpassword} placeholder="enter your password" onChange={(e)=> setuserdata({...userdata, comfirmpassword: e.target.value})} class="form-control" />
                           </div>
                           
                           <div class="form-group">
                               <input type="submit" value="register" class="btn btn-primary w-100 m-2"/>
                           </div>
                           
                          
                       </form>
                   </div>
               </div>
               <div class="row">
                   <div class="col-md-6">
                   <form >
                       <input type="submit" value="register with google " class="btn btn-primary w-100 m-2"/>
                   </form>


                   </div>
                   
               </div>
           </div>

        </div>
    )
}
export default Register;
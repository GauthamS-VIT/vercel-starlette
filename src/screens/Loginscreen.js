import React,{useState,useEffect} from 'react'
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Loginscreen() {
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();


    async function Login(){

            const user={
                email,
                password,
            }
            try{
                setloading(true);
                const result= await axios.post('https://render-starlette.onrender.com/api/users/login',user)
                setloading(false);

                localStorage.setItem('currentUser',JSON.stringify(result.data));
                window.location.href="/home"

            } catch(error){
                console.log(error)
                setloading(false);
                seterror(true);
            }
    }

  return (
    <div>

        {loading && (<Loader />)}
        <div className="row justify-content-center mt-5" data-aos='zoom-in'>
            <div className='col-md-5 mt-5'>
            {error && (<Error message='Invalid credentials' />)}
            <div className='bs'>
                <h2><i class="fa fa-user mr-2"></i>Login</h2>
                <input type="text" className="form-control" placeholder="E-mail" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

                <button className='btn btn-primary mt-3' onClick={Login}>Login</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Loginscreen
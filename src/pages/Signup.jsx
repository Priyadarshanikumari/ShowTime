import React,{useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import SignupNavbar from "../components/SignupNavbar";

function Signup(){

const navigate=useNavigate();

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [phone,setPhone]=useState("");
const [password,setPassword]=useState("");

const [message,setMessage]=useState("");
const [success,setSuccess]=useState(false);

const signup=(e)=>{

e.preventDefault();

const user={
name,
email,
phone,
password,
};

localStorage.setItem("user",JSON.stringify(user));

setMessage("✅ Signup Successful");
setSuccess(true);

setTimeout(()=>{
navigate("/login");
},1000);

};

return(
<>

<SignupNavbar/>

<div className="auth-container">

<h1>Sign Up</h1>

{message&&(
<p className={success?"success-msg":"error-msg"}>
{message}
</p>
)}

<form onSubmit={signup}>

<input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>

<input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

<input type="tel" placeholder="Enter Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>

<input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

<button type="submit">Signup</button>

</form>

<p>
Already have an account?
<Link to="/login"> Login</Link>
</p>

</div>

</>

);

}

export default Signup;
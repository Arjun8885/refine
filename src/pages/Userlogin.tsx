import { ReactNode, useImperativeHandle } from "react"
import { Link} from "react-router-dom"
export default function Userlogin(){
    
return (
    <div className="body">
    <div className="login-form">
<form  method="POST">
    

    <div className="title">User-Login</div>
    <input type="text"  placeholder="username"/><br></br>
   < input type="password" placeholder="password"/><br></br>
   <button type="submit" className="button" >Login</button>
   <p>Or</p>
   <div className="sign"><CustomLink to="/usersignup" > Signup</CustomLink></div>
   
   
    
    
    
    </form>       
    </div>
    </div>

);
}
interface IcustomLink{
    to:string
    children:ReactNode
    props?:any
}
function CustomLink({to,children,...props}:IcustomLink){
    
   
       
    
    return (
        
        <Link to={to}{...props} >
            {children}
            </Link>
            
    
    )
    
    
    }
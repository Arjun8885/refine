 import { ReactNode, useImperativeHandle } from "react"
import { Link,useMatch,useResolvedPath } from "react-router-dom"
 export default function Navbar(){
    const path = window.location.pathname
    return(
        <nav className="nav">
        <Link to="/" >Reactex</Link>
        <ul>
            <CustomLink to="/userlogin"  >User</CustomLink>
            <CustomLink to="/agentlogin" >Agent</CustomLink>
            <CustomLink to="/aboutus"  >About</CustomLink>
               
        </ul>
        </nav>
    )
}
interface IcustomLink{
    to:string
    children:ReactNode
    props?:any
}
function CustomLink({to,children,...props}:IcustomLink){
const resolvedPath    =   useResolvedPath(to)
const isActive = useMatch({path:resolvedPath.pathname,end:true})
   

    return (
        <li className={isActive ? "active": ""}>
        <Link to={to}{...props} >
            {children}
            </Link>
            </li> 
    
    )

}
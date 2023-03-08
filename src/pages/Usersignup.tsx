import React from 'react'

export default function Usersignup (){
  return (
  
    <div className="main">
    <div className="inputform">
  
<form  method="POST">
    

    <div className="title">Sign-Up</div>
    
   
    <input type="text"  placeholder="username"/><br></br>
    
   < input type="email" placeholder="email"/><br></br>
   <input type="text" placeholder="address"/><br></br>
   <input type="password" placeholder="new Password"/><br></br>
   <input type="password" placeholder="confirm new Password"/><br></br>
  
   <div className="labels">
   <label htmlFor="state">state</label>
   <select id="state" name="state">
    <option value="kerala">kerala</option>
    <option value="tamilnadu">tamilnadu</option>
    <option value="goa">goa</option>
    <option value="karnataka">karnataka</option>

   </select>
   </div>
   
   <button type="submit" className="buttn" >Login</button>
   
   
   
    
    
    
    </form>       
    </div>
    </div>

  );
}



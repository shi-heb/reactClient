import React from 'react';
import { Link }from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import logout from'./logout';
import './App.css';

function Nav() {
    const navStyle={color:'white'

    };
    
        const token = localStorage.token;
        
       //const decoded = jwt_decode(token);
        var linkProfile;
        var linkLogin;
        var linkLogout;
        var linkUsers;
        var linkRegister;
       if(token){
        const decoded = jwt_decode(token);
            if(decoded.role=='user')
           {linkProfile =<Link style ={navStyle}to ="/profile">
           <li>Profile </li>
           </Link>
           linkLogout=<Link to="/logout">
           <button color="white" className="btn btn-outline-light">
             <span>Logout</span>
           </button>
         </Link>}
         else if (decoded.role=='admin')
        { linkUsers= <Link style ={navStyle}to ="/users">
         <li>all useres !!</li>
         </Link>
         linkLogout=<Link to="/logout">
         <button color="white" className="btn btn-outline-light">
           <span>Logout</span>
         </button>
       </Link>}
           
       }
       
       else {linkLogin =<Link to="/login">
       <button color="white" className="btn btn-outline-light">
         <span>Login</span>
       </button>
     </Link>
       linkRegister=<Link to="/register">
       <button color="white" className="btn btn-outline-light">
         <span>Register</span>
       </button>
     </Link>
       }
    
   
  return (
    
   <nav>
       <h3>Theo</h3>
       <ul className="nav-links">
           
           <Link style ={navStyle}to ="/">
           <li>home</li>
           </Link>
          
           {linkLogin}
           {linkProfile}
           {linkRegister}
           {linkUsers}
           {linkLogout}
          
           
           

       </ul>
   </nav>
  );
}

export default Nav;

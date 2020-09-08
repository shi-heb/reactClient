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
       var linktransaction;
        var linkProfile;
        var linkLogin;
        var linkLogout;
        var linkUsers;
        var linkRegister;
        var linkacheter;
        var linkBlocks;
        var linkwallet;
       if(token){
        const decoded = jwt_decode(token);
            if((decoded.role=='user'))
           {
             
    
             linkProfile =<Link to ="/profile">
             <button color="white" className="btn btn-outline-light">
             <span>Profile</span>
           </button>
           </Link>


              linkwallet =<Link to ="/wallet">
             <button color="white" className="btn btn-outline-light">
             <span>Create Wallet</span>
           </button>
           </Link>



           linkLogout=<Link to="/logout">
           <button color="white" className="btn btn-outline-light">
             <span>Logout</span>
           </button>
         </Link>
         linktransaction=<Link to="/transaction">
         <button color="white" className="btn btn-outline-light">
           <span>Create transaction</span>
         </button>
       </Link>
         
         linkacheter=<Link to="/acheter">
         <button color="white" className="btn btn-outline-light">
           <span>Buy Teo points</span>
         </button>
       </Link>
         }




 



         else if (decoded.role=='admin')
        { linkUsers= <Link to ="/users">
         <button color="white" className="btn btn-outline-light">
           <span>Dashbord</span>
           </button>
         </Link>
         linkLogout=<Link to="/logout">
         <button color="white" className="btn btn-outline-light">
           <span>Logout</span>
         </button>
       </Link>
       linkBlocks=<Link to="/blocks">
       <button color="white" className="btn btn-outline-light">
         <span>See All Blocks</span>
       </button>
     </Link> 
      }
           
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
       <h3>TheoBank</h3>
       <ul className="nav-links">
           
           
          
           {linkLogin}
           {linkProfile}
           {linkRegister}
           {linkUsers}
           {linkLogout}
           {linktransaction}
           {linkacheter}
           {linkBlocks}
           {linkwallet}
          
           
           

       </ul>
   </nav>
  );
}

export default Nav;

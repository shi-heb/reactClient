import React, { Component } from 'react'

 

   

const logout = ({ history }) => {
    
      if(localStorage.getItem('token')!== null)
       {localStorage.removeItem('token')
        history.push('/');
        window.location.reload(false);}
        else
        {history.push('/register');
        window.location.reload(false);}
      }
      
    
  
   
  
  export default logout













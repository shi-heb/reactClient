
import React , { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class Todotranx extends Component {
  
 
    constructor(props) {
          super(props);
          
          
              
      }
  
    
        
    render() {
      
      
  
    
      
      return (
      
        <div className="card">
       <h5>Sender</h5>
  
        {this.props.obj.transactions.sender}
        
        <h5>Recipient</h5>
       {this.props.obj.transactions.recipient}
       <h5>amount</h5>
  
       {this.props.obj.transactions.amount}
       
        </div>
         
   
   
    
   
    
    
   
    
   
    
       
  
        
      
      
      
         
      );
    }
  }
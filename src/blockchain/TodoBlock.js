import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import '../blockchain/blocCss.css';
import c from '../blockchain/Detail';
import Popup from "reactjs-popup";



export default class TodoBlock extends Component {
 
  
  constructor(props) {
        super(props);
        
        this.gettranx = this.gettranx.bind(this);
            
    }

    gettranx(){
      axios.get('http://localhost:4000/api/blocks/detail/'+this.props.obj._id).then(res => {
        var result = res.data;
        this.setState({ result: result });
        console.log (JSON.stringify(this.state.result));
        
        var b = JSON.stringify(result);
        var a = JSON.parse(b);
        
        //var a =JSON.stringify(b);
       // this.setState({sender:myJsonString.sender.sender});
        //this.setState({recipient:myJsonString.sender.recipient});
       // this.setState({amount:myJsonString.sender.amount});
        //alert(a[0].sender.sender);
        alert("the sender is :"+"\t"+a[0].sender.sender+"\n"+"the recipient is:"+"\t"+a[0].sender.recipient+"\n"+"the amount:"+"\t"+a[0].sender.amount);
          
      })
        
      //});
    }


    
    
    


  render() {
    
  
      
    return (
     
      <div className="card">
     <h5>Date</h5>

      {this.props.obj.timestamp}
      
      <h5>Previous Hash</h5>
     {this.props.obj.prevHash}
     <h5>Hash</h5>

     {this.props.obj.hash}
     
  

     
     <button onClick={this.gettranx} color="white" className="btn-danger">
           <span>See transaction detail</span>
           </button>
      
      </div>
      
      
       
    );
  }
}


import React  from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
//const jwt = require('jsonwebtoken');

//import useEffect from 'react';
//var cors = require('cors')
//import {Link} from 'react-router-dom';

import '../App.css';
export default  class transaction extends React.Component {
    state ={
        sender:'',
        recipient:'',
        amount:'',
        };
        handleChange = event => {
          //this.setState({name:event.target.value,email:event.target.value,password:event.target.value});
          this.setState({ [event.target.name]: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value });
         // console.log(this.state,'55555555');
        };
        handleSubmit = event=>{
          event.preventDefault();
         
          const transaction ={
            
            sender:this.state.sender,
            recipient:this.state.recipient,
            amount: this.state.amount
          };
          axios.post(`http://localhost:4000/api/blocks/transactions/new`,transaction).then(res=>{
            console.log(res);
            console.log(res.data);
            this.props.history.push(`/profile`);
             window.location.reload(false);
        }).catch((error) => {
            alert(error.response.data)
           });
        



}



componentDidMount() {
    //const token = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.token;
    const decoded = jwt_decode(token);
    
    
    
   // const decoded = jwt_decode(token);
    this.setState({
      sender: decoded.email}
   
      
    )
  }


render(){
    return (
      
      <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={this.handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Create transaction</h1>
         
        
         
         
          
                <div className="form-group">
                  <label htmlFor="recipient">recipient</label>
                  <input
                    type="email"
                    className="form-control"
                    name="recipient"
                    placeholder="recipient"
                    value={this.state.recipient}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="amount">amount</label>
                  <input
                    type="number"
                    className="form-control"
                    name="amount"
                    placeholder="amount"
                    value={this.state.amount}
                    onChange={this.handleChange}
                  />
                </div>



                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block"
                >
                  Create transaction
                </button>
       
        </form>
        </div>
          </div>
        </div>
      
      
      
    );
    
  }






}
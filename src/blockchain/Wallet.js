import React  from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

//const jwt = require('jsonwebtoken');

//import useEffect from 'react';
//var cors = require('cors')
//import {Link} from 'react-router-dom';

import '../App.css';
export default  class Wallet extends React.Component {
    
    state ={
        email:'',
       
        amount:'',
        };
        handleChange = event => {
          //this.setState({name:event.target.value,email:event.target.value,password:event.target.value});
          this.setState({ [event.target.name]: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value });
         
        };
        handleSubmit = event=>{
          event.preventDefault();
         
          const wallet ={
            
            email:this.state.email,
            
            amount: this.state.amount
          };
          axios.put(`http://localhost:4000/api/blocks/wallet/new`,wallet).then(res=>{
            console.log(res);
            console.log(res.data);
            
            
            this.props.history.push(`/profile`);
             window.location.reload(false);
             //alert('You had successfully bye points \t , you must login again to use your points ')
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
      email: decoded.email
     
      
    })
  }

  render(){
    return (
      
      <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={this.handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Create Wallet</h1>
         
        
         
         
          <h4>1$ = 4 teo</h4>
                
                <div className="form-group">
                  <label htmlFor="amount">Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    name="amount"
                    placeholder="amount"
                    inputmode="numeric"
                    value={this.state.amount}
                    onChange={this.handleChange}
                   
                  />
                </div>



                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block"
                >
                  Create wallet
                </button>
       
        </form>
        </div>
          </div>
        </div>
      
      
      
    );
    







}}
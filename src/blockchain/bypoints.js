import React  from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

//const jwt = require('jsonwebtoken');

//import useEffect from 'react';
//var cors = require('cors')
//import {Link} from 'react-router-dom';

import '../App.css';
export default  class bypoints extends React.Component {
    
    state ={
        _id:'',
       rib:'',
        amount:'',
        };
        handleChange = event => {
          //this.setState({name:event.target.value,email:event.target.value,password:event.target.value});
          this.setState({ [event.target.name]: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value });
         
        };
        handleSubmit = event=>{
          event.preventDefault();
         
          const achat ={
            
            _id:this.state._id,
            rib:this.state.rib,
            amount: this.state.amount
          };
          axios.put(`http://localhost:4000/api/blocks/acheter`,achat).then(res=>{
            console.log(res);
            console.log(res.data);
            
            
            this.props.history.push(`/profile`);
             window.location.reload(false);
             alert('You had successfully bye points \t , you must login again to use your points ')
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
      _id: decoded._id
     
      
    })
  }

  render(){
    return (
      
      <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={this.handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">buy teo points</h1>
         
        
         
         
          
                <div className="form-group">
                  <label htmlFor="rib">RIB</label>
                  <input
                    type="Text"
                    className="form-control"
                    name="rib"
                    placeholder="Enter your RIB "
                    value={this.state.rib}
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
                    inputmode="numeric"
                    value={this.state.amount}
                    onChange={this.handleChange}
                   
                  />
                </div>



                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block"
                >
                  Buy teo points
                </button>
       
        </form>
        </div>
          </div>
        </div>
      
      
      
    );
    







}}
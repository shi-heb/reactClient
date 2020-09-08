import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
///const jwt = require('jsonwebtoken');

class profile extends Component {

     
    constructor() {
        super()
        this.state = {
        name: '',
      email: '',
      amount:'',
      wallet:''
       
      }}
    
  
    componentDidMount() {
      //const token = JSON.parse(localStorage.getItem('user'));
      const token = localStorage.token;
      const decoded = jwt_decode(token);
      const id=decoded._id;
      
    const l= axios.get(`http://localhost:4000/api/user/amount/`+id).then(res=>{
    console.log(res);
    var result = res.data;
    console.log(result);
    const b = JSON.stringify(result);
        const b1 = JSON.parse(b);
        this.setState({amount:b1.a})
        
    })

    const ll= axios.get(`http://localhost:4000/api/user/wallet/`+id).then(res=>{
    console.log(res);
    var result = res.data;
    console.log(result);
    const b = JSON.stringify(result);
        const b1 = JSON.parse(b);
        this.setState({wallet:b1.a})
        
    })
    
        
      
     // const decoded = jwt_decode(token);
      this.setState({
        name: decoded.nom,
       
        email: decoded.email,
        amount:l.b1,
        
       // amount:m.c,
      })
    }

    render() {
        return (
          <div className="container">
            <div className="jumbotron mt-5">
              <div className="col-sm-8 mx-auto">
                <h1 className="text-center">PROFILE</h1>
              </div>
              <table className="table col-md-6 mx-auto">
                <tbody>
                  <tr>
                    <td><h5>Fist Name</h5></td>
                    <td>{this.state.name}</td>
                  </tr>
                  
                  <tr>
                    <td><h5>Email</h5></td>
                    <td>{this.state.email}</td>
                  </tr>

                  <tr>
                    <td><h5>Amount</h5></td>
                    <td>You have {this.state.amount} teo points</td>
                    
                  </tr>

                  <tr>
                    <td><h5>Credit</h5></td>
                    
                    <td>You have {this.state.wallet} $ in your wallet</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      }
}
export default profile

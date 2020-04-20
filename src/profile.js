import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
///const jwt = require('jsonwebtoken');

class profile extends Component {

     
    constructor() {
        super()
        this.state = {
        name: '',
      email: ''
       
      }}
    
  
    componentDidMount() {
      //const token = JSON.parse(localStorage.getItem('user'));
      const token = localStorage.token;
      const decoded = jwt_decode(token);
      
      
      
     // const decoded = jwt_decode(token);
      this.setState({
        name: decoded.nom,
       
        email: decoded.email
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
                    <td>Fist Name</td>
                    <td>{this.state.name}</td>
                  </tr>
                  
                  <tr>
                    <td>Email</td>
                    <td>{this.state.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      }
}
export default profile

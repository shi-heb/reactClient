import React  from 'react';
import axios from 'axios';
//import {Alert}  from 'react-alert'
//import useEffect from 'react';
//var cors = require('cors')
//import {Link} from 'react-router-dom';

import './App.css';

export default  class register extends React.Component {

state ={name:'',
email:'',
password:'',
};
handleChange = event => {
  //this.setState({name:event.target.value,email:event.target.value,password:event.target.value});
  this.setState({ [event.target.name]: event.target.value });
 // console.log(this.state,'55555555');
};
handleSubmit = event=>{
  event.preventDefault();
 
  const user ={
    name:this.state.name,
    email:this.state.email,
    password:this.state.password
  };
  console.log(user,"user")
  let a=axios.post(`http://localhost:4000/api/user/register`,user).then(res=>{
   console.log(res);
   console.log(res.data);
   
   
  this.props.history.push(`/login`);
    


  }).catch((error) => {
    alert(error.response.data)
   })
  
  
  
  
};


render(){
  return (
    
    <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
            <div className="form-group">
            
       
            <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your first name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                </div>

                <div className="form-group">
       
       <label htmlFor="name">Email</label>
           <input
             type="email"
             className="form-control"
             name="email"
             placeholder="Enter your email"
             value={this.state.email}
             onChange={this.handleChange}
           />
           </div>
           <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
              </form>
          </div>
        </div>
      </div>
       
       
     
     
    
    
  );
}
     
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


/*export const del = props => (
    axios.delete('http://localhost:4000/api/user/deleteuser/'+props.obj._id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
)*/

class Todo extends Component {

  constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
        this.activateUser=this.activateUser.bind(this);
        this.desactivateAdmin=this.desactivateAdmin.bind(this);
        this.desactivateUser=this.desactivateUser.bind(this);
        this.grantToAdmin=this.grantToAdmin.bind(this);

        
    }

    deleteUser() {
        axios.delete('http://localhost:4000/api/user/deleteuser/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }


    activateUser() {
      axios.put('http://localhost:4000/api/user/activateUser/'+this.props.obj._id)
          .then(console.log('Deleted'))
          .catch(err => console.log(err));
          window.location.reload(false);
  }

  grantToAdmin() {
    axios.put('http://localhost:4000/api/user/grantToAdmin/'+this.props.obj._id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err));
        window.location.reload(false);
}


desactivateAdmin() {
  axios.put('http://localhost:4000/api/user/grantToUser/'+this.props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err));
      window.location.reload(false);
}



desactivateUser() {
  axios.put('http://localhost:4000/api/user/desactivateUser/'+this.props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err));
      window.location.reload(false);
}




  render() {
    let buttonForUserActivation;
    let buttoForAdminActivation;

    if (this.props.obj.isactive.toString()=='false') {
      buttonForUserActivation = <button onClick={this.activateUser} className="btn btn-primary">Activate</button>;
    } else {
      buttonForUserActivation = <button onClick={this.desactivateUser} className="btn btn-primary">DisactivateUser</button>;
    }

   if(this.props.obj.role=='user'){
    buttoForAdminActivation=<button onClick={this.grantToAdmin} className="btn btn-primary">GrantToAdmin</button>
       }
       else {buttoForAdminActivation=<button onClick={this.desactivateAdmin} className="btn btn-primary">desactiveAdmin</button>
      }
    
    return (
      
        <tr>
      <td> {this.props.obj.name}</td>
      <td >{this.props.obj.email}</td>
      <td >{this.props.obj.role}</td>
      <td >{this.props.obj.isactive.toString()}</td>
      <td>
            <button className="btn btn-primary">Edit</button></td>
          
          <td>
            <button onClick={this.deleteUser}  className="btn btn-danger">Delete</button></td>
          
  
         <td>{buttonForUserActivation}</td>
         <td>{buttoForAdminActivation}</td>
          
          
      
      
  </tr>
    );
  }
}

export default Todo;
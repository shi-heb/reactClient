import React  from 'react';
import axios from 'axios';
//import del from './tableRow';
import Todo from '../UsersComponent/Todo';


//import useEffect from 'react';
//var cors = require('cors')



import '../App.css';
/*const Todo = props => (
  <tr>
      <td> {props.obj.name}</td>
      <td >{props.obj.email}</td>
      <td >{props.obj.role}</td>
   
      <td >{props.obj.isactive.toString()}</td>
      <td>
            <button className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button  onClick={del}  className="btn btn-danger">Delete</button>
          </td>
          <td>
            <button className="btn btn-primary">Activate</button>
          </td>
          <td>
            <button className="btn btn-primary">GrantToAdmin</button>
          </td>
      
      
  </tr>
)*/

/*const del = props => (
  axios.delete('http://localhost:4000/api/user/deleteuser/'+props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
)*/



export default  class DisplayUsers extends React.Component {

  constructor(props) {
    super(props)
    this.state ={users:[]};
   // this.del = this.del.bind(this)
  }
componentDidMount(){
  axios.get(`http://localhost:4000/api/user/usersList`).then(res=>{
    console.log(res);
    this.setState({users:res.data});
  });
}

DataTable() {
   return this.state.users.map((data, i) => {
    return <Todo obj={data} key={i} /> ;
  });
}
/*del(props) {
  axios.delete('http://localhost:4000/api/user/deleteuser/'+props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
}*/


render(){
  return (
    <div className="container">
    <div className="jumbotron mt-5">
      <div className="col-sm-8 mx-auto">
        <h1 className="text-center">list of users</h1>
      </div>
      <table className="table col-md-6 mx-auto">
      <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            
          </tr>
        </thead>

     
      <tbody>
                  
       {this.DataTable()}
      
      </tbody>
      </table>
      
    </div>
    </div>
    
  );
}
     
}

//AllUsers;

import React , { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
//import { Grid, Card, Icon, Image , Button} from 'semantic-ui-react';

import TodoBlock from'../blockchain/TodoBlock';


export default  class blockList extends React.Component {

    constructor(props) {
      super(props)
      this.state ={blocks:[]};
      
   
      
     
    }
  componentDidMount(){
    axios.get(`http://localhost:4000/api/blocks/blockList`).then(res=>{
      console.log(res);
      this.setState({blocks:res.data});
    });
  }
    
  DataTable() {

   
    return this.state.blocks.map((data, i) => {
     return(
     <div className="column">
       <div className="row">
      
       <TodoBlock obj={data} key={i} />
       
       
          </div>
          </div>
          
          );
   })
 }
 
  render(){
    
    
    return (
    
           
         
      <div>
                      
      {this.DataTable()}
      
      </div>  
           
        
      );
     
     

 

       
  }}
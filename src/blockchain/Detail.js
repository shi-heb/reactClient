import React , { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Todotranx from '../blockchain/Todotranx';
import blockList from '../blockchain/blockList';








export default  class Detail extends React.Component {

    constructor(props) {
        super(props)
        this.state ={blocs:[]};
       
      }
    componentDidMount(){
        axios.get('http://localhost:4000/api/blocks/detail/$this.props.obj._id').then(res=>{
            console.log(res);
            this.setState({blocs:res.data});
         
        });
    }
    
    DataTable() {
  
      return this.state.blocs.map((data, i) => {
       return(
       <div className="column">
         <div className="row">
        
         <
         Todotranx obj={data} key={i} />
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
   
  }
         
    }
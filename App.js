import React,{Component} from 'react';
import Data from './data';
import Style from './style.css';
import { useState } from 'react';
import Exam from './exam';
import {BrowserRouter,Route , Link} from 'react-router-dom';


export default class App extends Component{
	constructor(props){
	  super(props);
	  this.state={show:false}
}
	

	render(){ 
			const start=()=>{
	this.setState({show:true});
}
  return (
	  <div>
	   {this.state.show ? (<Exam/>):(
		<button onClick={start}>Start Exam</button>
        )
	   }
	    
		</div>
  );
}
}

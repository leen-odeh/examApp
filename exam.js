// JavaScript Document
import React,{Component} from 'react';
import Data from './data';
import Style from './style.css';
import { useState } from 'react';
export default function Exam(){
	
	
		var index=Math.round(Math.random());
	    const [QuestionNum, setQuestionNum] = useState(0);
		const [showResult, setShowResult] = useState(false);
		const [score, setScore] = useState(0);
	    const [numIndex,setNumIndex]=useState(index);
		var selected=new Array();
	
	
	    const Option=()=>{
			return(
		  Data.questions[numIndex].answerOption.map((answer,key) => (
				<button onClick={()=>handleClickCheck(answer.isCorrect)}>{answer.opt}</button>
			 ))
		);
		};
		
		const handleClickCheck=(isCorrect)=>{
			selected.push(numIndex);
			if (isCorrect) {
			setScore(score + 1);
		   }

			if(QuestionNum+1 < Data.questions.length){
				do{
					index=Math.round(Math.random());
					setNumIndex(index);
				}
				while(selected.includes(index));
					setQuestionNum(QuestionNum+1);
				/*if(index==0){
					setQuestionNum(QuestionNum+1);
				    index=1;
				}
				else
				  {  setQuestionNum(QuestionNum+1);
				    index=0;}*/
			}
			else{
				    setShowResult(true);
			}
		};
	
	
		const Q=()=>{
			var num=QuestionNum+1;
			return(<h3>{"Q "+num+": "+Data.questions[numIndex].text}</h3>
				  );
		};
	
	
		const Result=()=>{
			return(<h3>{"scored = "+score}</h3>
				  );
		};
	
	
  return (
	  <div>
	     { showResult ? (
			<Result/>
				   ):( 
				<>
    			<div>
					<Q/>
					<Option/>
		            
				</div>
	  			</>
			)}		
		</div>
		
  );
}

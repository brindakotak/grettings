import React,{useState} from "react";
import './Greetings.css'

let currentDate = new Date();
 currentDate=currentDate.getHours();

 let greetings= '';
 const cssStyle={};

 

 if(currentDate >=1 && currentDate <12){
     greetings="Good Morning";
     cssStyle.color="green";
 }
 else if(currentDate >=12 && currentDate < 19){
     greetings="Good Afternoon";
     cssStyle.color="orange"

 }
 else{
     greetings="Good Night";
     cssStyle.color="black"
 }

 

const Greetings = (props) => {

    let selectName = "Please select A Product  ";
    if(props.pName !== ''){
        selectName = "you have selected:  "  + props.pName
    }

     
    return(
        <div >
        {/* <input type="text" className="userInput" placeholder="Enter Your Name: " onChange={handleChange }/> */}
        
        <div className="greetingDiv">
        


            {/* <h1>Hello <span>{props.selectName}</span>, <span style={cssStyle}>{greetings}</span>{selectName}</h1> */}
            <h3>Hello <span>{props. uName}</span>, <span style={cssStyle}>{greetings}</span><br/>&nbsp;{selectName}</h3>
           
        </div>
       
        </div>
    )
}
export default Greetings;
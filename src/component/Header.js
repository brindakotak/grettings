import React,{useState} from "react";

const Header = (props) => {
    const[currentUserName,changeCurrentUserName]=useState("");

const handleChange =  (event) => {
    props.userName(event.target.value)
 }

    return(
        <>
            <input type="text" className="userInput" placeholder="Enter Your Name: " onChange={handleChange }/>
        </>
    )
}

export default Header;
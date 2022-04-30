// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Greetings from '../src/component/Greetings'
import Product from '../src/component/Product'
import Header from '../src/component/Header'

function App() {
  const [prodtName,changeProdtName] = useState("");
  const[userName,changeUserName]=useState("");


  const itemSelected = (name,color) =>{
    changeProdtName( name); 
  }

  const userOnChangeName = (currentUserName) => {
    changeUserName(currentUserName)
  }

  
  return (
    <div className="App">
      <Header userName={userOnChangeName}/>
  
      <Greetings uName={userName} pName={prodtName} />    
      <Product imageClicked={itemSelected}/>

    </div>
  );
}

export default App;

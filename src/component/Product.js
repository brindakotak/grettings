import React from "react";
import ProductJSON from './Product.json';


const Product = (props) => {
    
    let imgDetail = ProductJSON
        
    const clickEvent = (name) => {
      props.imageClicked(name)   
    //   return props.imageClicked(name)
    //   console.log(props)
    }
    
    const renderImage = imgDetail.map((item) => {
        
        return(
        
           <>
                {/* <img src={img.image} alt="image"/>
                <h1>{img.id}</h1>
                <p>{img.name}</p> */}
                <div className="col" key={item.id} onClick={(e)=>clickEvent(item.name, 'red')}>
                   <div className="card" style={{height:'250px',width:'350px',borderRadius:'50px',display:'inline-block',marginBottom:'2%'}}>
                       <img src={item.image} className="card-mg-top" style={{height:'80px',width:'20%'}} />
                       <div className="card-body">
                           <h5 className="card-title">{item.id}</h5>
                           <p className="card-text">{item.name}</p>
                           
                           {/* <p className="card-text">Rs. {item.cost}</p>
                           <p className="card-text">Use: {item.uses}</p>  */}
                       </div>
                   </div>
                   
                </div>
               
                
                </>
            
            
        )
     })

     
    return(
        
        <div className="row" >
            
        {renderImage}
        
        
                      </div>
                      
    )
}

export default Product;
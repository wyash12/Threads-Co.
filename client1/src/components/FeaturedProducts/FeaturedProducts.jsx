import React from 'react'
import "./FeaturedProducts.scss"
import Cards from '../Cards/Cards';
const FeaturedProducts = ({type}) => {
    const data = [
{   id:1,
         img:  "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2:        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Long jackent",
        isNew:true,
        oldPrice: 1900,
        price: 1200,       
    } ,
           {     id:2,
              img:    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
              title: "Long Coat",
        isNew:true,
        oldPrice: 1900,
        price: 1200,
}];
    



  return (
    <div className="featured">\
    <div className="top">
        <h1>{type} products</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
          sit amet dolor finibus, consequat nulla at, venenatis neque. Donec 
          consequat lacinia augue at faucibus. Fusce a mi eu eros finibus 
          gravida. Maecenas ipsum massa.
         
        </p>
    </div>
    <div className="bottom">
    {data.map(item=>{
        <Cards item = {item} key={item.id}/>
    })}
    </div>
    </div>
  )
}

export default FeaturedProducts
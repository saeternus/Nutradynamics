import React from 'react'
import * as Components from '../Components/index'
import food from '../Assets/delicious-preserved-food-jars-arrangement 1.png'

import './Styles/Catalog.css'
function Catalog() {
  const dummyproducts =  {
    products:
     [{
      name : 'Ketchup',
      discount : '0.5%',
      price : '$10',
      imgage : `${food}`,
      rating : '4.5',
      id: '12345'
    },{
      name : 'Ketchup',
      discount : '0.5%',
      price : '$10',
      imgage : `${food}`,
      rating : '4.5',
      id: '12345'
    },{
      name : 'Ketchup',
      discount : '0.5%',
      price : '$10',
      imgage : `${food}`,
      rating : '4.5',
      id: '12345'
    },{
      name : 'Ketchup',
      discount : '0.5%',
      price : '$10',
      imgage : `${food}`,
      rating : '4.5',
      id: '12345'
    },{
      name : 'Ketchup',
      discount : '0.5%',
      price : '$10',
      imgage : `${food}`,
      rating : '4.5',
      id: '12345'
    },{
      name : 'Ketchup',
      discount : '0.5%',
      price : '$10',
      imgage : `${food}`,
      rating : '4.5',
      id: '12345'
    },{
      name : 'Ketchup',
      discount : '0.5%',
      price : '$10',
      imgage : `${food}`,
      rating : '4.5',
      id: '12345'
    },{
      name : 'Ketchup',
      discount : '0.5%',
      price : '$10',
      imgage : `${food}`,
      rating : '4.5',
      id: '12345'
    },{
      name : 'Ketchup',
      discount : '0.5%',
      price : '$10',
      imgage : `${food}`,
      rating : '4.5',
      id: '12345'
    },{
      name : 'Ketchup',
      discount : '0.5%',
      price : '$10',
      imgage : `${food}`,
      rating : '4.5',
      id: '12345'
    },]
  }
  return (
    <div className='productsbox'>
      <div className='emptydiv'></div>
      <div className='productstitle'>Our Products</div>
      <div className='productsgrid'>
        {dummyproducts.products.map((element)=>{
          return(
          <Components.Productcard name={element.name} discount= {element.discount} price={element.price} img={element.imgage} rating={element.rating}/>
        )})}
      </div>
    </div>
  )
}

export default Catalog

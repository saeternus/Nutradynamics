import React, { useEffect, useState } from 'react'
import * as Components from '../Components/index'
import food from '../Assets/delicious-preserved-food-jars-arrangement 1.png'
import cross from '../Assets/icons8-cross-64.png'
import filter from '../Assets/setting.png'

import './Styles/Catalog.css'
function Catalog() {
  const [list,setlist] = useState([])
  const [deletingcat,setdeletingcat] = useState('')
  const [addingcat,setaddingcat] = useState('')

  const Categories = ['Pickle', 'Millet Snacks', 'Candid Fruit', 'Mayo', 'Dip', 'Spread', 'Sauce', 'Health Supplements']

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

  function Removecatagorie(){
    if (deletingcat !== ''){
      for( var i = 0; i < list.length; i++){ 
        if ( list[i] === deletingcat) { 
            list.splice(i, 1); 
            let element = document.querySelector(`[name="${deletingcat}"]`)
            element.dataset.status = 'false'
            element.checked = false
        }
    }
    setdeletingcat('')
    }
  }

  function Addcatagorie(){
    if (addingcat !== ''){
            (list.push(addingcat)); 
    }
    setaddingcat('')
    }

  function Changevalue(cat){
    let element = document.querySelector(`[name="${cat}"]`)
    if (element.dataset.status === 'false'){
      element.dataset.status = 'true'
      setaddingcat(cat)
    }
    else{
      setdeletingcat(cat)
    }
  }

  useEffect(() => {
    Removecatagorie()
  }, [deletingcat]);

  useEffect(() => {
    Addcatagorie()
  }, [addingcat]);

  function SelectedCatagories(e){
      return <div className='catogarieselectedcard'>{e.values}
      <img src={cross} alt="" onClick={()=>{setdeletingcat(e.values)}}/></div>
  }

  return (
    <div className='productsbox'>
      <div className='emptydiv'></div>
      <div className='productfilterandgrid'>
      <div className='filterbox'>
        <div className='topicandimg'>Filters
            <img src={filter} alt="" />
        </div>
            <div className='catogarieslist'>
              <div className='cattopic'>Categories</div>
              {Categories.map((cat)=>{
                return(
                <div className='categorie'>
                <input type="checkbox" id={cat} name={cat} data-status='false' onClick={()=>{
                  Changevalue(cat)
                }}/>
                <label htmlFor={cat}>{cat} </label>
                </div>)
              })}
            </div>
    </div>
      <div className='productflex'>
        <div className='productstitle'>Our Products</div>
        {list.length === 0 ? 
        <></>
      :
      <>
      <div className='filterlist'>
      <div className='filtersapplied'>Filters</div>
      <div className='catagoriesselected'>
        {list.map((e)=>{
          return(
        <SelectedCatagories values = {e}/>)
        })}
      </div>
      </div>
      </>}
      <div className='productsgrid'>
        {dummyproducts.products.map((element)=>{
          return(
          <Components.Productcard name={element.name} discount= {element.discount} price={element.price} img={element.imgage} rating={element.rating}/>
        )})}
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Catalog

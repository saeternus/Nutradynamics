import React, { useState } from 'react'
import './Styles/Cart.css'
import food from '../Assets/delicious-preserved-food-jars-arrangement 1.png'
import * as Component from '../Components/index'

function Cart() {
  const [total,settotal] = useState(300)
  let dummydata = {
    items: [{
      name: 'Ketchup',
      discount: '0.5%',
      price: '10',
      imgage: `${food}`,
      count: '1',
      id: '12345'

    }, {
      name: 'Ketchup',
      discount: '0.5%',
      price: '10',
      imgage: `${food}`,
      count: '1',
      id: '12345'
    }, {
      name: 'Ketchup',
      discount: '0.5%',
      price: '10',
      imgage: `${food}`,
      count: '1',
      id: '12345'
    },]
  }

  function Populatecart(e) {
    return (<Component.Cartcard product={e.values} />)
  }

  let Count = dummydata.items.length

  return (
    <div className='cartbox'>
      <div className='emtybox'></div>
      <div className='bag-and-price-detail'>
        <div className='shoppingbag'>
          <div className='shoppingtext'>My Shopping Bag {`(${Count})`}</div>
          <div className='productscontainer'>
            {dummydata.items.map((e) => {
              return (
                <Populatecart values={e} />)
            })}
          </div>
          <hr />
            <div className='totaldisplay'>Total = Rs {total}</div>
            <div className='proceedbutton'>Proceed</div>
        </div>
        {/* <div className='price-details'>
          <div className='shoppingtext'>Price Details</div>
          <div className='tablesize'>
            <table className='details-table'>
              <tr>
                <th>Product Name</th>
                <th>Qt.</th>
                <th>Amt.</th>
              </tr>
              {dummydata.items.map((e) => {
                return (
                  <tr>
                    <td>{e.name}</td>
                    <td>{e.count}</td>
                    <td>{e.price}</td>
                  </tr>)
              })}
            </table>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Cart

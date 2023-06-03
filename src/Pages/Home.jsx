import React from 'react'
import Ben1 from '../Assets/top.png'
import * as Components from '../Components/index'

function Home() {
  return (
    <div className='homebox'>
      <Components.Main/>
        <div className='benefits'>
        <div className='cards'>
            <Components.BenefitsCard img={`${Ben1}`} text='Made with fresh and
            best Ingredients'/>
            <Components.BenefitsCard img={`${Ben1}`} text='Made with fresh and
            best Ingredients'/>
            <Components.BenefitsCard img={`${Ben1}`} text='Made with fresh and
            best Ingredients'/>
            <Components.BenefitsCard img={`${Ben1}`} text='Made with fresh and
            best Ingredients'/>
        </div>
        </div>
        <Components.HomeGallery/>
    </div>
  )
}

export default Home

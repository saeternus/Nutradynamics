import React from 'react'
import './Styles/Testimonial.css'
import profilepic from '../Assets/profile.png'
import * as Components from '../Components/index.js'
import leftimg from '../Assets/Expand_left_light.png'
import rightimg from '../Assets/Expand_right_light.png'

function Testimonial() {
  let c = 0
  const dummyreviews = {
    reviews:[{
      name : 'Leo',
      designation : 'Head Designer',
      rating : '4.2',
      title: 'It was a very good experience',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
      profilepic : `${profilepic}`
    },{
      name : 'Leo1',
      designation : 'Head Designer',
      rating : '4.0',
      title: 'It was a very good experience',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
      profilepic : `${profilepic}`
    },{
      name : 'Leo2',
      designation : 'Head Designer',
      rating : '4.0',
      title: 'It was a very good experience',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
      profilepic : `${profilepic}`
    },{
      name : 'Leo3',
      designation : 'Head Designer',
      rating : '4.0',
      title: 'It was a very good experience',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
      profilepic : `${profilepic}`
    },{
      name : 'Leo4',
      designation : 'Head Designer',
      rating : '4.0',
      title: 'It was a very good experience',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
      profilepic : `${profilepic}`
    },{
      name : 'Leo5',
      designation : 'Head Designer',
      rating : '4.0',
      title: 'It was a very good experience',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
      profilepic : `${profilepic}`
    },]
  }
  function Moveleft(){
      const group = document.getElementsByClassName('reviewbox')
      const nextindex = c-1 >= 0 ? c-1 : group.length-1 ;
      const previousindex = c+1 <= group.length-1 ? c+1 : 0;
      const nexttonextindex = nextindex-1 >= 0? nextindex-1 : group.length-1 ;
      const currentactive = document.querySelector(`[data-index="${c}"]`),
            nextcard = document.querySelector(`[data-index="${nextindex}"]`),
            previouscard = document.querySelector(`[data-index = "${previousindex}"]`),
            nexttonextcard = document.querySelector(`[data-index = "${nexttonextindex}"]`),
            currentcircle = document.querySelector(`[circleindex = '${c}']`),
            nextcircle = document.querySelector(`[circleindex = '${nextindex}']`);
      currentactive.dataset.status = 'Right';
      nextcard.dataset.status = 'Active'
      previouscard.dataset.status = 'Unknown'
      nexttonextcard.dataset.status = 'Left'
      currentcircle.dataset.status = 'inactive'
      nextcircle.dataset.status = 'Active'
      c = nextindex
  }
  function moveright(){
    const group = document.getElementsByClassName('reviewbox')
    const nextindex = c+1 <= group.length-1 ? c+1 : 0 ;
    const previousindex =  c-1 >= 0 ? c-1 : group.length-1 ;
    const nexttonextindex = nextindex+1 <= group.length-1 ? nextindex+1 : 0 ;
    const currentactive = document.querySelector(`[data-index="${c}"]`),
          nextcard = document.querySelector(`[data-index="${nextindex}"]`),
          previouscard = document.querySelector(`[data-index = "${previousindex}"]`),
          nexttonextcard = document.querySelector(`[data-index = "${nexttonextindex}"]`),
          currentcircle = document.querySelector(`[circleindex = '${c}']`),
          nextcircle = document.querySelector(`[circleindex = '${nextindex}']`);
    currentactive.dataset.status = 'Left';
    nextcard.dataset.status = 'Active'
    previouscard.dataset.status = 'Unknown'
    nexttonextcard.dataset.status = 'Right'
    currentcircle.dataset.status = 'inactive'
    nextcircle.dataset.status = 'Active'
    c = nextindex
  }
  function Adddatatypeandindex(e){
    let datatype
    if (e.c===0){
      datatype = 'Active'
    }
    else if (e.c===1){
      datatype = 'Right'
    }
    else if (e.c===(dummyreviews.reviews.length-1)){
      datatype = 'Left'
    }
    else{
      datatype = 'Unknown'
    }
      return <Components.Reviewcard name={e.e.name} designation={e.e.designation} rating={e.e.rating} title={e.e.title} text={e.e.text} profilepic={e.e.profilepic} datatype={datatype} dataindex={e.c} />
    }
  function Addcircles(e){
    let circlestatus = 'inactive'
    if (e.ind===c){
      circlestatus = 'Active'
    }
      return <div className='circles' circleindex={e.ind} data-status={circlestatus}></div>
  }
  return (
    <div className='testimonialbox'>
      <div className='emtybox'></div>
      <div className='Testimonialtext'>What Our Clients Say About Us</div>
      <div className='reviewsslider'>
        <div className='reviewsinnerbox'> 
        {dummyreviews.reviews.map((e,c)=>{
          return (
            <Adddatatypeandindex e={e} c={c}/>
        )})}
        </div>
      </div>
      <div className='reviewsbuttons'>
        <div className='leftbutton' onClick={Moveleft}>
        <img src={leftimg} alt=""/>
        </div>
        <div className='circlesbox'>
        {dummyreviews.reviews.map((e,index)=>{
          return (
            <Addcircles ind={index}/>
        )})}
        </div>
        <div className='rightbutton' onClick={moveright}>
        <img src={rightimg} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Testimonial

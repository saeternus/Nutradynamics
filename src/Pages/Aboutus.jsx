import React, { useLayoutEffect, useRef, useState } from 'react'
import * as Components from '../Components/index'
import './Styles/Aboutus.css'
import person from '../Assets/person.png'
import leftimg from '../Assets/Expand_left_light.png'
import rightimg from '../Assets/Expand_right_light.png'

function Aboutus() {
  const dummydata = {
    Team:
      [{
        name: 'Jhon Wick',
        post: 'Creative Director',
        img: `${person}`
      }, {
        name: 'Jhon Wick',
        post: 'Creative Director',
        img: `${person}`
      }, {
        name: 'Jhon Wick',
        post: 'Creative Director',
        img: `${person}`
      }, {
        name: 'Jhon Wick',
        post: 'Creative Director',
        img: `${person}`
      }, {
        name: 'Jhon Wick',
        post: 'Creative Director',
        img: `${person}`
      }, {
        name: 'Jhon Wick',
        post: 'Creative Director',
        img: `${person}`
      }, {
        name: 'Jhon Wick',
        post: 'Creative Director',
        img: `${person}`
      }, {
        name: 'Jhon Wick',
        post: 'Creative Director',
        img: `${person}`
      },]
  }
  let y = dummydata.Team.length
  let x
  const ref = useRef(null)
  const [blockleft, setblockleft] = useState(true)
  const [blockright, setblockright] = useState(false)
  const [left, setleft] = useState(0)
  const [width, setwidth] = useState(0)

  useLayoutEffect(() => {
    setwidth(ref.current.offsetWidth)
  }, [left])
  function moveright() {
    x = left - 400
    if (x - width < -(y * 400)) {
      setleft(-(y * 400) + width)
      setblockright(true)
    }
    else {
      setleft(x)
      setblockleft(false)
    }
  }
  function moveleft() {
    x = left + 400
    if (x > 0) {
      setleft(0)
      setblockleft(true)
    }
    else {
      setleft(x)
      setblockright(false)
    }
  }

  return (
    <div className='center'>
      <Components.Aboutus />
      <div className='teambox'>
        <div className='teamheading'>Team</div>
        <div className='teamgroup'>
          <div className='arrow' onClick={moveleft} disabled={blockleft}>
            <img src={leftimg} alt="" />
          </div>
          <div className='teamgroupinner' ref={ref}>
            <div className='insideteam' id='wrapper' style={{ transform: `translateX(${left}px)` }}>
              {dummydata.Team.map((member)=>{
                console.log(member.img)
                return <Components.Teamcard name={member.name} title={member.post} img={member.img} />
              })}
            </div>
          </div>
          <div className='arrow' onClick={moveright} disabled={blockright}>
            <img src={rightimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus

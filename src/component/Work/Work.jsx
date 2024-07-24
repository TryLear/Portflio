import React from 'react'
import './Work.css'
import theme_pattern from '../../assest/theme_pattern.svg'
import Data from '../data/data'
import arrow from '../../assest/arrow_icon.svg'
function Work() {
  return (
    <div id='work' className='my-work'>
      <div className="work-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="work-container">
        {Data.map((mywork,index)=>{
          return <img key={index} src={mywork.w_image} alt="" />
        })}
      </div>
      <div className="work-showmore">
        <p>Show More</p>
        <img src={arrow} alt="" />
      </div>

    </div>
  )
}

export default Work
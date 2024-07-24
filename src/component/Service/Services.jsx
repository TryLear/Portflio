import React from 'react'
import './Services.css'
import theme_pattern from '../../assest/theme_pattern.svg'
import Services_Data from '../../assest/services_data'
import arrow_icon from '../../assest/arrow_icon.svg'

function Services() {
  return (
    <div id='services' className='service'>
        <div className="service-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="service-container">
            {Services_Data.map((service,index)=>{
                return <div key={index} className="service-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="service-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>

            })}

        </div>

    </div>
  )
}

export default Services
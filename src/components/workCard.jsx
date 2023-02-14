import './workCard.css';
import React from 'react'
import { NavLink } from 'react-router-dom';
import Work from './work';
import cardData from './workCardData'
export const WorkCard = () => {
  return (
    <div className='work-container'>
           <h1 className='project-heading'>Projects</h1>
           <div className='project-container'>
            {cardData.map((item,index)=>{
                return (
                    <Work 
                       imgsrc={item.img}
                       title={item.title}
                       text={item.text}
                       view={item.view}
                       source={item.source}
                    />
                )
            })}
           </div>
    </div>
  )
}
export default WorkCard;
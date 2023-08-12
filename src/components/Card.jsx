import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-[#d5cfd5] capitalize shadow-xl font-bold rounded-[7px] h-[200px] flex flex-col   items-center   justify-evenly  md:mt-11'>
      <div>{props.title}</div>
      <div>totla questions</div>
      <div>{props.questionCount}</div>
    </div>
  )
}

export default Card

import React from 'react'
import InfoCards from '../infoCards/InfoCards'

const FrontPageSections = ({title}) => {
  return (
    <>
    <div className='sm:px-[8%] lg:px-[10%] 2xl:px-[12%] px-4'>
    <h2 className='py-3 font-bold text-xl sm:text-2xl'>{title}</h2>
      <InfoCards/>
      <button className='py-3'>More to explore...</button>
    </div>
     
    </>
  )
}

export default FrontPageSections
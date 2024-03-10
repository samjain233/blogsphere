import React from 'react'

const categoriesList=["user1","user2","user3","user4","user5","user6","user7","user8"]

const Bloggers = () => {
  return (
    <>
      <div className='flex flex-wrap justify-center items-center sm:px-[8%] lg:px-[10%] 2xl:px-[12%] px-4'>
    {categoriesList.map((element,index)=>{
    return <div key={index} className='rounded-circle'>
        <h2 className=' font-bold text-xl sm:text-2xl border border-black px-8 py-4 rounded-full bg-lime-200 m-2 ' style={{ width: '150px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{element}</h2>
    </div>
})}
    </div>
    </>
  )
}

export default Bloggers
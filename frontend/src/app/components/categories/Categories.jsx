import React from 'react'


const categoriesList = ["Food", "Lifestyle", "Personal blogs", "News", "Finance", "Health", "Writing", "Business"]

const Categories = () => {
    return (

        <>
            <div className='flex flex-wrap justify-center items-center sm:px-[8%] lg:px-[10%] 2xl:px-[12%] px-4'>
                {categoriesList.map((element, index) => {
                    return <div key={index}>
                        <h2 className=' font-bold text-xl sm:text-2xl border border-black px-8 py-4 rounded-md bg-lime-200 m-2' >{element}</h2>
                    </div>
                })}
            </div>
        </>
    )
}

export default Categories
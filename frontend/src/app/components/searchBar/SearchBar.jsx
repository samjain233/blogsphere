import React from 'react'

const SearchBar = () => {
  return (
    <>
        <div className="my-8 w-full flex justify-center items-center ">
            <input type="text" placeholder='Search for your fav blog...' className='p-2 border-2 border-black w-[60%]' />
        </div>
    </>
  )
}

export default SearchBar
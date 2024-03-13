"use client";
import Image from 'next/image';
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const categoriesList=["user1","user2","user3","user4","user5","user6","user7","user8"]

const imageurl="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww";

const Bloggers = () => {
  return (
    <>
      <div className='flex flex-wrap justify-center items-center sm:px-[8%] lg:px-[10%] 2xl:px-[12%] px-4'>
        {categoriesList.map((element,index)=>{
          return (
            <div key={index} className='m-4'>
              <img
                src={imageurl}
                alt="user"
                height={500}
                width={500}
                className='rounded-full h-[200px] w-[200px] object-cover'
              />
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Bloggers
import React from 'react'
import {useState} from 'react'
export default function BlogCard({ cardData }) {

  const { URL, category, title, content } = cardData
  const [liked , setLiked] = useState(false)

  function handleLiked(){
     setLiked(!liked)
  }

  return (
    <div className='flex flex-col gap-4 p-3 h-100 w-[100%] rounded-2xl  bg-[#1e2939] text-white relative shadow-lg hover:shadow-2xl'>
      <img src={URL} className='h-1/2 w-full rounded-2xl' alt="image" />
      <span className='absolute right-6 top-6 text-[13px] text-white bg-[#c27aff] rounded-4xl p-1 px-3'>{category}</span>
      <div className='flex flex-col gap-1 px-4'>
        <h1 className='font-bold text-yellow-300 text-lg line-clamp-2'>Star <span className='text-white'>{title}</span></h1>
        <p className='text-start text-md line-clamp-2'>{content}</p>
        <svg width="45px" height="45px" viewBox="2 -4.8 57.60 57.60" version="1" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer absolute left-7 bottom-4'  stroke='black' strokeWidth="0.5" onClick={handleLiked}>
        <g id="SVGRepo_iconCarrier"> 
        <path className={ liked ? "fill-pink-400" : "fill-white"} d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z">
        </path>
        </g>
        </svg>
      </div>
    </div>
  )
}

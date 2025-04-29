import React from 'react';
import BlogCard from './BlogCard';

export default function BlogList({ displayCardsData , className }) {
  return (   
    <>
      {displayCardsData.length ? (<div className={className}> {displayCardsData.map((cardData) => <BlogCard cardData={cardData} />)} </div>
      ) : (
        <>
      <span className='text-center text-2xl text-white max-sm:text-md'>No Blogs found...</span>
      <span className='text-center text-xl text-white max-sm:text-sm'>Try adding some blogs by clicking on ➕Add Blog</span>
       </>
      )}
    </>
  )
}

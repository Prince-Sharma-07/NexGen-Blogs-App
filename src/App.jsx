import React, { useState , useEffect } from 'react'
import BlogModal from './Components/BlogModal'
import Header from './Components/Header'
import Main from './Components/Main'

export default function App() {
  const [cardsData, setCardsData] = useState([])
  const [toggleCard, setToggleCard] = useState(false)
  const [displayCardsData , setDisplayCardsData] = useState([])
  useEffect(()=>setDisplayCardsData(cardsData) , [cardsData])

  function handleOpenClose() {
    setToggleCard(!toggleCard)
  }

  return (
    <div className='min-h-screen bg-[#364153]'>
      {toggleCard && <BlogModal handleOpenClose={handleOpenClose} cardsData={cardsData} setDisplayCardsData={setDisplayCardsData} setCardsData={setCardsData}/>}
      <Header handleOpenClose={handleOpenClose} cardsData={cardsData} setDisplayCardsData={setDisplayCardsData}/>
      <Main displayCardsData={displayCardsData}/>
    </div>
  )
}

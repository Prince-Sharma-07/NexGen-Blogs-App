import { useEffect, useState } from "react"

export default function Header({ handleOpenClose, cardsData, setDisplayCardsData }) {

    const [inputValue, setInputValue] = useState("")
    const [currCategory, setCurrCategory] = useState('All')

    function handleCategoryFilter() {
        if (currCategory === 'All') setDisplayCardsData(cardsData)
        else setDisplayCardsData(() => cardsData.filter(data => data["category"] == currCategory))
    }

    function handleSubmit(e) {
        e && e.preventDefault()
        return inputValue ?
            (setDisplayCardsData((prevData) => prevData.filter(data => data["title"].toLowerCase().includes(inputValue.replaceAll(' ', '').trim().toLowerCase())))
            ) : (
                handleCategoryFilter(currCategory)
            )
    }

    useEffect(handleCategoryFilter, [currCategory])

    useEffect(handleSubmit, [inputValue])

    return (
        <header className='flex flex-col gap-4 p-3 pb-5 px-16 bg-[#101828] max-sm:px-4'>

                

            <div className='flex max-sm:flex-col max-sm:gap-2 gap-8 max-md:gap-4'>

                <span className="max-sm:hidden flex-1">
                    <h1 className='p-2 text-4xl text-[#c27aff] font-bold animate'>NexGen Blogs</h1>
                </span>

                <div className="max-sm:flex max-sm:justify-between sm:hidden">
                    <h1 className='text-2xl p-2 font-bold animate'>NexGen Blogs</h1>
                    <button type="button" className='text-sm px-2 p-[0.5rem] text-white cursor-pointer bg-[#e60076] my-auto rounded-xl' onClick={handleOpenClose}>➕Add Blog</button>
                </div>

                <form onSubmit={handleSubmit} className="flex  gap-3 items-center max-sm:hidden">
                    <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" placeholder='Search posts...' className='my-auto p-2 px-4 bg-[#3641536c] rounded-4xl text-gray-300 outline-[#c27aff] focus:outline-3 border border-[#777f8aa5]' />
                    <button type="submit" className=' p-2 px-6 text-white cursor-pointer bg-[#c27aff] my-auto rounded-4xl'>Search</button>
                </form>

                <form className="max-sm:h-9 flex p-2 gap-2 items-center bg-[#3641536c] rounded-4xl text-gray-300 focus-within:outline-[#c27aff] focus-within:outline-2 border border-[#777f8aa5] sm:hidden">
                    <svg width="20px" height="20px" viewBox="-3.2 -3.2 38.40 38.40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <title>search</title> <desc>Created with Sketch Beta.</desc>
                        <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                        <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-256.000000, -1139.000000)" fill="#777f8a">
                        <path d="M269.46,1163.45 C263.17,1163.45 258.071,1158.44 258.071,1152.25 C258.071,1146.06 263.17,1141.04 269.46,1141.04 C275.75,1141.04 280.85,1146.06 280.85,1152.25 C280.85,1158.44 275.75,1163.45 269.46,1163.45 L269.46,1163.45 Z M287.688,1169.25 L279.429,1161.12 C281.591,1158.77 282.92,1155.67 282.92,1152.25 C282.92,1144.93 276.894,1139 269.46,1139 C262.026,1139 256,1144.93 256,1152.25 C256,1159.56 262.026,1165.49 269.46,1165.49 C272.672,1165.49 275.618,1164.38 277.932,1162.53 L286.224,1170.69 C286.629,1171.09 287.284,1171.09 287.688,1170.69 C288.093,1170.3 288.093,1169.65 287.688,1169.25 L287.688,1169.25 Z" id="search" sketch:type="MSShapeGroup">
                        </path> </g> </g> </g>
                    </svg>
                    <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" placeholder='Search posts...' className='border-none outline-none' />
                </form>

                <button type="button" className='max-sm:hidden max-md:text-sm max-lg:text-sm max-lg:p-1 max-lg:px-2 p-2 px-4 text-white cursor-pointer bg-[#e60076] my-auto rounded-xl' onClick={handleOpenClose}>➕Add Blog</button>
            </div>

            <nav className='flex max-sm:flex-wrap max-sm:gap-2 gap-4 text-white'>
                <button className={`max-sm:px-2 max-sm:text-[0.8rem] max-sm:p-[0.4rem] px-6 p-2 bg-[#3641536c] border border-[#777f8aa5] rounded-4xl cursor-pointer hover:bg-[#c27aff] ${currCategory == 'All' && 'bg-[#c27aff]'} `} onClick={() => setCurrCategory('All')}>All</button>
                <button className={`max-sm:px-2 max-sm:text-[0.8rem] max-sm:p-[0.4rem] px-6 p-2 bg-[#3641536c] border border-[#777f8aa5] rounded-4xl cursor-pointer hover:bg-[#c27aff] ${currCategory == 'Technology' && 'bg-[#c27aff]'} `} onClick={() => setCurrCategory('Technology')} >Technology</button>
                <button className={`max-sm:px-2 max-sm:text-[0.8rem] max-sm:p-[0.4rem] px-6 p-2 bg-[#3641536c] border border-[#777f8aa5] rounded-4xl cursor-pointer hover:bg-[#c27aff] ${currCategory == 'Travel' && 'bg-[#c27aff]'} `} onClick={() => setCurrCategory('Travel')}>Travel</button>
                <button className={`max-sm:px-2 max-sm:text-[0.8rem] max-sm:p-[0.4rem] px-6 p-2 bg-[#3641536c] border border-[#777f8aa5] rounded-4xl cursor-pointer hover:bg-[#c27aff] ${currCategory == 'Food' && 'bg-[#c27aff]'} `} onClick={() => setCurrCategory('Food')}>Food</button>
                <button className={`max-sm:px-2 max-sm:text-[0.8rem] max-sm:p-[0.4rem] px-6 p-2 bg-[#3641536c] border border-[#777f8aa5] rounded-4xl cursor-pointer hover:bg-[#c27aff] ${currCategory == 'LifeStyle' && 'bg-[#c27aff]'} `} onClick={() => setCurrCategory('LifeStyle')}>LifeStyle</button>
            </nav>

        </header>
    )
}
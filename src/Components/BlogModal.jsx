import { useState } from 'react';

export default function BlogModal({ handleOpenClose, cardsData ,  setCardsData  , setDisplayCardsData}) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [URL, setURL] = useState("");
    const [category, setCategory] = useState("");

    function handleValidations(event){
        event && event.preventDefault()
        if(title.replaceAll(' ' , '').trim() === '') alert('Enter a valid Title...')
        else if(content.replaceAll(' ','').trim() === '') alert('Entered content is not valid...')
        else if(category == '') alert('Please select a valid category...')
        else if(URL.replaceAll('',' ').trim() === '') alert("Enter a Valid Image URL...")
        else handleCreateBlog()
    }

    function handleCreateBlog() {
        setDisplayCardsData(cardsData)
        setCardsData((prevData) => [{ title, content, URL, category }, ...prevData])
        handleOpenClose()
        setTitle("")
        setContent("")
        setURL("")
        setCategory("")
    }

    return (
        <div className='h-full w-full fixed flex justify-center items-center bg-[rgba(0,0,0,0.8)] z-10'>
            <form onSubmit={handleValidations} className='max-sm:w-[90%] h-fit w-[30%] max-md:w-[60%] max-lg:w-[50%] max-xl:w-[40%] maxmd flex flex-col bg-[#101828] p-8 relative gap-4 rounded-xl justify-stretch'>
                <h1 className='text-3xl font-bold text-center text-pink-400'>➕ Create a Blog</h1>
                <button className='absolute right-4 top-3 text-2xl text-gray-500 hover:text-white p-2' onClick={handleOpenClose}>x</button>
                <input value={title} onChange={(e) => setTitle(e.target.value)} className="p-3 bg-[#364153] rounded-md text-gray-300" type="text" placeholder='Blog Title'  />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} className="p-3 bg-[#364153] rounded-md text-gray-300" placeholder='Blog Content'  />
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-3 bg-[#364153] rounded-md text-gray-300">
                    <option value="" disabled>Select your category</option>
                    <option value="Technology">Technology</option>
                    <option value="Travel">Travel</option>
                    <option value="Food">Food</option>
                    <option value="LifeStyle">LifeStyle</option>
                </select>
                <input placeholder='Tags (Comma Seperated)' className="p-3 bg-[#364153] rounded-md text-gray-300" type="text" />
                <input value={URL} onChange={(e) => setURL(e.target.value)} placeholder='Image URL' className="p-3 bg-[#364153] rounded-md text-gray-300" type="text" />
                {URL ? <img src={URL} alt="Preview" className="my-2 h-50 text-white rounded-md object-cover" required/> : null}
                <button type='submit' className="p-3 rounded-md text-gray-300 bg-pink-400 hover:bg-pink-500">Create Blog</button>
            </form>
        </div>
    )
}

import BlogList from "./BlogList"

export default function Main({ displayCardsData }) {

    return (
        <main className='flex flex-col gap-6 p-10 mx-30 px-10 max-sm:px-5 max-sm:p-2 max-sm:gap-3 max-sm:mx-4 overflow-auto'>

                <div className='flex gap-2 max-sm:mt-2 items-center'>
                    <img src="/blogs_icon.svg" className='h-15 w-15' alt="blogs_icon" />
                    <span className='text-3xl max-sm:text-2xl font-bold text-white mb-3 mt-1'>All Blogs</span>
                </div>

                <BlogList className={"w-[100%] grid md-max:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8"} displayCardsData={displayCardsData} />

        </main>
    )
}
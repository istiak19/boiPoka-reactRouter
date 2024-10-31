import banner from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-lg my-16">
            <div className="hero-content flex-col lg:flex-row-reverse gap-7 p-24">
                <img
                    src={banner}
                    className="rounded-lg w-[400px]" />
                <div className='space-y-5'>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-[#23BE0A] text-xl font-bold">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
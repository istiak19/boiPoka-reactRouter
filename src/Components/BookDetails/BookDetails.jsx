import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { addToStoredWishList, addToStoreReadList } from "../Utilities/utilities";
import { Helmet } from "react-helmet-async";

const BookDetails = () => {
    const { bookId } = useParams()
    const id = parseInt(bookId)
    const data = useLoaderData()
    const navigate = useNavigate()
    const book = data.find(d => d.bookId === id)
    const { bookId: currentBookId, image, review, author, yearOfPublishing, publisher, category, rating, totalPages, bookName, tags } = book
    const handleRead = (id) => {
        addToStoreReadList(id)
    }

    const handleWishList = (id) => {
        addToStoredWishList(id)
    }

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div className="hero">
            <Helmet>
                <title>BookDetails - Boi Poka</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="bg-base-200 p-16 rounded-lg w-96" />
                <div className="space-y-2">
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="border-b-2 pb-3">By: {author}</p>
                    <p className="border-b-2 pb-3">{category}</p>
                    <p className="py-6 text-justify"><span className="font-semibold">Review:</span> {review}</p>
                    <p className="border-b-2 pb-3"><span className="font-bold mr-6">Tag: {
                        tags.map((tag, idx) => <button key={idx} className="btn btn-xs text-[#23BE0A] mr-6">#{tag}</button>)
                    }</span></p>
                    <p>Number of Pages: <span className="font-bold">{totalPages}</span></p>
                    <p>Publisher: <span className="font-bold">{publisher}</span></p>
                    <p>Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></p>
                    <p>Rating: <span className="font-bold">{rating}</span></p>
                    <button onClick={() => handleRead(bookId)} className="btn btn-outline mr-4 btn-accent">Read</button>
                    <button onClick={() => handleWishList(bookId)} className="btn bg-[#50B1C9]">Wishlist</button>
                    <button onClick={handleGoBack} className="btn bg-[#55d535] ml-3">Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
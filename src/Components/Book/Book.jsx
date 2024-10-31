import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const {bookId, image, author, bookName, tags, rating, category } = book
    return (
        <Link to={`book/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6 border space-y-5">
                <figure className='bg-blue-200 p-6 rounded-lg'>
                    <img className='h-40 w-36 rounded-lg'
                        src={image}
                        alt="Books" />
                </figure>
                <div className='flex flex-row gap-8'>
                    {
                        tags.map(tag => <button className="btn btn-xs text-[#23BE0A] font-medium">{tag}</button>)
                    }
                </div>
                <h2 className="card-title flex-grow">{bookName}</h2>
                <p className='border-b-2 border-dotted pb-5 font-medium text-gray-600'>By: {author}</p>
                <div className='flex justify-between'>
                    <p className='font-medium'>{category}</p>
                    <p className='flex gap-1 items-center font-medium'>{rating} <CiStar></CiStar></p>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired
};

export default Book;
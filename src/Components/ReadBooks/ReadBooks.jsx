import PropTypes from 'prop-types';

const ReadBooks = ({ book }) => {
    const { yearOfPublishing, publisher, tags, category, rating, totalPages, review, image, author, bookName } = book
    return (
        <div className="hero bg-base-200 border-2 rounded-lg my-10">
            <div className="hero-content flex-col lg:flex-row">
                <figure>
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl w-[230px] h-[230px]" />
                </figure>
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="py-6">By:  {author}</p>
                    <div className='flex gap-5'>
                        <p><span>Tag: {
                            tags.map((tag,idx) => <button key={idx} className="btn btn-xs">#{tag}</button>)
                        }</span></p>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                    <div className='flex gap-3 border-b-2 pb-4'>
                        <p>Publisher: {publisher}</p>
                        <p>Page {totalPages}</p>
                    </div>
                    <div>
                        <button className="btn btn-xs">Category: {category}</button>
                        <button className="btn btn-xs">Rating: {rating}</button>
                        <button className="btn btn-xs">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReadBooks.propTypes = {
    book: PropTypes.object.isRequired
};

export default ReadBooks;
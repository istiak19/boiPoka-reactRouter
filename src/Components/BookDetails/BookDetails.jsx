import { useParams } from "react-router-dom";

const BookDetails = () => {
    const { bookId } = useParams()
    return (
        <div>
            <h2>BookDetails {bookId}</h2>
        </div>
    );
};

export default BookDetails;
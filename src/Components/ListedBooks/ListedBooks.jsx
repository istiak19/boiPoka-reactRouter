import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredWishList, getStoreReadList } from '../Utilities/utilities';
import Book from '../Book/Book';
import ReadBooks from '../ReadBooks/ReadBooks';
import WishList from '../WishList/WishList';
import { Helmet } from 'react-helmet-async';

const ListedBooks = () => {
    const books = useLoaderData()
    const [reads, setReads] = useState([])
    const [wish, setWish] = useState([])
    const [sort, setSort] = useState('')
    useEffect(() => {
        const storedReadList = getStoreReadList()
        const storedReadListIn = storedReadList.map(id => parseInt(id))
        const readList = books.filter(book => storedReadListIn.includes(book.bookId))
        setReads(readList)
    }, [])

    useEffect(() => {
        const storedWishList = getStoredWishList()
        const storedWishListIn = storedWishList.map(id => parseInt(id))
        const wishList = books.filter(book => storedWishListIn.includes(book.bookId))
        setWish(wishList)
    }, [])

    const handleSort = (sortType) => {
        setSort(sortType)
        if (sortType === 'Rating') {
            const sortedReadList = [...reads].sort((a, b) => a.rating - b.rating)
            setReads(sortedReadList)
            const sortedWishListed = [...wish].sort((a, b) => a.rating - b.rating)
            setWish(sortedWishListed)
        }
        else if (sortType === 'No Of Page') {
            const sortedReadLists = [...reads].sort((a, b) => b.totalPages - a.totalPages)
            setReads(sortedReadLists)
            const sortedWishListes = [...wish].sort((a, b) => b.totalPages - a.totalPages)
            setWish(sortedWishListes)
        }

    }

    return (
        <div>
            <Helmet>
                <title>ListedBook - Boi poka</title>
            </Helmet>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">{sort ? `Sort By: ${sort}` : 'Sort By'}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Rating')}><a>Rating</a></li>
                    <li onClick={() => handleSort('No Of Page')}><a>No Of Page</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2>Read Books: {reads.length}</h2>
                    {
                        reads.map(book => <ReadBooks key={book.bookId} book={book}></ReadBooks>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Wishlist Books: {wish.length}</h2>
                    {
                        wish.map(book => <WishList key={book.bookId} book={book}></WishList>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
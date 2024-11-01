import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredWishList, getStoreReadList } from '../Utilities/utilities';
import Book from '../Book/Book';
import ReadBooks from '../ReadBooks/ReadBooks';
import WishList from '../WishList/WishList';

const ListedBooks = () => {
    const books = useLoaderData()
    const [reads,setReads]=useState([])
    const [wish,setWish]=useState([])
    useEffect(() => {
        const storedReadList = getStoreReadList()
        const storedReadListIn = storedReadList.map(id => parseInt(id))
        const readList = books.filter(book => storedReadListIn.includes(book.bookId))
        setReads(readList)
    }, [])

    useEffect(()=>{
        const storedWishList=getStoredWishList()
        const storedWishListIn=storedWishList.map(id=>parseInt(id))
        const wishList = books.filter(book => storedWishListIn.includes(book.bookId))
        setWish(wishList)
    },[])


    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2>Read Books: {reads.length}</h2>
                    {
                        reads.map(book=><ReadBooks key={book.bookId} book={book}></ReadBooks>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Wishlist Books: {wish.length}</h2>
                    {
                        wish.map(book=><WishList key={book.bookId} book={book}></WishList>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
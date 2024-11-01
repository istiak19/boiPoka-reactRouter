import { toast } from "react-toastify";

// Function to retrieve the stored read list from localStorage
const getStoreReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    return storedListStr ? JSON.parse(storedListStr) : [];
};

// Function to add a book to the stored read list in localStorage
const addToStoreReadList = (id) => {
    const storedList = getStoreReadList();
    if (storedList.includes(id)) {
        console.log(`${id} already exists in the read list`);
    } else {
        storedList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedList));
        toast('This Book added')
    }
};

// Function to retrieve the stored wishlist from localStorage
const getStoredWishList = () => {
    const storedWishStr = localStorage.getItem('wish-list');
    return storedWishStr ? JSON.parse(storedWishStr) : [];
};

// Function to add a book to the stored wishlist in localStorage
const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        console.log(`${id} already exists in the wish list`);
    } else {
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
        toast('This Book Added')
    }
};

export { addToStoreReadList, addToStoredWishList, getStoreReadList, getStoredWishList };
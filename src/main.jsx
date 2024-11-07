import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import BookDetails from './Components/BookDetails/BookDetails';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'book/:bookId',
        loader: () => fetch('booksData.json'),
        element: <BookDetails></BookDetails>
      },
      {
        path: '/listedBook',
        loader: () => fetch('/booksData.json'),
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pageToRead',
        loader: () => fetch('/booksData.json'),
        element: <PagesToRead></PagesToRead>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </HelmetProvider>
  </StrictMode>,
)

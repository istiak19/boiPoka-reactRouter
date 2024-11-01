import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dash from './Components/DashBorad/Dash';
import BookDetails from './Components/BookDetails/BookDetails';
import ListedBooks from './Components/ListedBooks/ListedBooks';


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
        loader:()=>fetch('/booksData.json'),
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/dash',
        element: <Dash></Dash>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

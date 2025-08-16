import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Error from "./assets/Components/Error/Error"
import './index.css'
import Root from './Root.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Components/Home/Home.jsx'
import BookDetails from './assets/Components/BooksDetails/BookDetails.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/book/:bookId",
        element:<BookDetails></BookDetails>,
        loader:()=>fetch("./../public/booksData.json")
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

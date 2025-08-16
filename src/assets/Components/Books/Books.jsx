import { useEffect } from "react";
import { useState } from "react";

const Books = () => {

const [books, setBooks] = useState([])

useEffect(()=>{
    fetch("../../../../public/booksData.json")
    .then(res => res.json())
    .then(data => setBooks(data))
},[])

    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Books</h1>
<div>
    {
        <h1>{books.length}</h1>
        
    }
</div>

        </div>
    );
};

export default Books;
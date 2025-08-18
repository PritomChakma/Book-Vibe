import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utility/ReadList";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((books) => books.bookId === id);

  const handleReadList = (id) => {
    addToStoredReadList(id);
  };

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="max-w-6xl mx-auto my-12 p-8 bg-white shadow-lg rounded-2xl grid md:grid-cols-2 gap-10 items-center">
      {/* Left Side: Book Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={bookName}
          className="w-72 h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Right Side: Book Info */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{bookName}</h1>
        <p className="text-gray-600 mb-2">
          By : <span className="font-medium">{author}</span>
        </p>
        <p className="text-gray-500 mb-4">{category}</p>

        {/* Review */}
        <h2 className="text-lg font-semibold mb-1">Review :</h2>
        <p className="text-gray-700 leading-relaxed mb-4">{review}</p>

        {/* Tags */}
        <div className="mb-4 flex gap-2 flex-wrap">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Extra Info */}
        <div className="space-y-2 text-gray-700 mb-6">
          <p>
            <span className="font-semibold">Number of Pages:</span> {totalPages}
          </p>
          <p>
            <span className="font-semibold">Publisher:</span> {publisher}
          </p>
          <p>
            <span className="font-semibold">Year of Publishing:</span>{" "}
            {yearOfPublishing}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> ⭐ {rating}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => handleReadList(bookId)}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow"
          >
            Read
          </button>
          <button className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg shadow">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

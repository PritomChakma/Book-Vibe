import { Link } from "react-router-dom";

const BooksCard = ({ book }) => {
  const {bookId, image, tags, bookName, author, publisher } = book;
  return (
  <Link to={`/book/${bookId}`}>
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="bg-gray-200 py-5">
        <img className="h-[200px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex gap-2 justify-center">
          {tags.map((tag) => (
            <button className="btn btn-xs  text-[#23BE0A]" key={tag}>
              {tag}
            </button>
          ))}
        </div>

        <h2 className="card-title">
          <span className=" font-bold">Name:</span> {bookName}
        </h2>
        <p>
          <span className="">by:</span> {author}
        </p>
        <div className="flex justify-between">
          <h1>{publisher}</h1>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-500"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-500"
              aria-label="2 star"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-500"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-500"
              aria-label="4 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-500"
              aria-label="5 star"
            />
          </div>
        </div>
      </div>
    </div>
  </Link>
  );
};

export default BooksCard;

import { Link } from "react-router-dom";
function Paginate({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ol className="flex justify-center mt-6 gap-1 text-xs font-medium">
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            <Link>{number}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Paginate;

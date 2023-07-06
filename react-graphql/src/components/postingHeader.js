import { Link } from "react-router-dom";

function PostingHeader() {
  return (
    <div className="p-10 pb-5 w-full">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Browse through a large collection of jobs...
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-400 w-4/5">
        JobSprinter features a wide variety of jobs in all kinds of fields.
        Simply browse through the large collection jobs with links that take you
        straight to the posting on the company website.
      </p>
      <div className="mt-10 flex items-center gap-x-6">
        <Link
          to="/create"
          className="rounded-md bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add a job
        </Link>
        <a href="#" className="text-sm font-semibold leading-6 text-white">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

export default PostingHeader;

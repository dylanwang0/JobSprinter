import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-10 pb-5 w-4/5">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        It all starts with the job search...
      </h1>
      <p className="mt-6 text-xl leading-8 text-gray-400 w-4/5">
        JobSprinter is job search website to help hard working people find their
        dream jobs. JobSprinter helps both job seekers to find jobs fit for them,
        and companies to promote their job opportunities on this site. Job postings
        can be created, edited and deleted at any time.
      </p>
      <div className="mt-10 flex items-center gap-x-6 pointer-events-auto">
        <Link
          to="/postings"
          className="rounded-md bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get Started
        </Link>
        <a href="#" className="text-sm font-semibold leading-6 text-white">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

export default Header;

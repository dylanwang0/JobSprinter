import Header from "./header";
import PostingList from "./jobPostings";
import Navbar from "./navbar";
import PostingHeader from "./postingHeader";

function Postings() {
  return (
    <div>
      <Navbar />
      <div className="h-full bg-gray-800 p-24 pt-5 flex">
        <PostingHeader />
        <PostingList />
      </div>
    </div>
  );
}

export default Postings;

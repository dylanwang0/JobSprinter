import Header from "./header";
import PostingList from "./jobPostings";
import Navbar from "./navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="h-full bg-gray-800 p-24 pt-5">
        <Header />
        <PostingList />
      </div>
    </div>
  );
}

export default Home;

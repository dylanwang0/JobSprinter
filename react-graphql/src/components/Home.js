import Header from "./header";
import Navbar from "./navbar";

function Home() {
  return (
    <div className="relative h-screen bg-gray-800">
      <Navbar />
      <div className="absolute top-0 h-screen w-screen flex justify-center items-center z-0 pointer-events-none">
        <Header />
      </div>
    </div>
  );
}

export default Home;

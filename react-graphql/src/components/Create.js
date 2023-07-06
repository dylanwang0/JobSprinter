import CreateJob from "./createJob";
import Header from "./header";
import Navbar from "./navbar";

function Create() {
  return (
    <div className="relative h-screen bg-gray-800">
      <Navbar />
      <div className="absolute top-0 h-screen w-screen flex justify-center items-center z-0 pointer-events-none">
        <CreateJob />
      </div>
    </div>
  );
}

export default Create;

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PodcastPreview from "./PodcastPreview";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#fffeeb] to-[#dba11a] ">
      <Navbar />
      <Sidebar />
      <PodcastPreview />
    </div>
  );
}

export default App;

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PodcastPreview from "./PodcastPreview";
import Keywords from "./Keywords";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#fffeeb] to-[#dba11a] ">
      <Navbar />
      <Keywords />
      <Sidebar />
      <PodcastPreview />
    </div>
  );
}

export default App;

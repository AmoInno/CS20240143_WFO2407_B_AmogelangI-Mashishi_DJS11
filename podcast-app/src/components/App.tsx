import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Keywords from "./Keywords";
import PodcastPreview from "./PodcastPreview";
import DisplayPodcast from "./DisplayPodcast";
import { Routes, Route } from "react-router-dom";
import DisplayGenre from "./DisplayGenre";
import FavoritesPage from "./FavoritesPage";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#fffeeb] to-[#dba11a] w-full">
      <Navbar />
      <Keywords />
      <Sidebar />
      {/* <div className="w-100vh m-2 py-4 px-6 overflow-auto lg:ml-0"> */}
      <Routes>
        <Route path="/" element={<PodcastPreview />} />
        <Route path="/id/:id" element={<DisplayPodcast />} />
        <Route path="/genre/{genreId}" element={<DisplayGenre />} />
        <Route path="/favourites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;

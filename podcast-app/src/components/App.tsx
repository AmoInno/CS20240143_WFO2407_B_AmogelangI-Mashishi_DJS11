import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PodcastPreview from "./PodcastPreview";
import DisplayPodcast from "./DisplayPodcast";
import { Routes, Route } from "react-router-dom";
import DisplayGenre from "./DisplayGenre";
import FavoritesPage from "./FavoritesPage";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#fffeeb] to-[#dba11a] w-full">
      <Navbar />
      <Sidebar />

      <div className="pt-24 pl-[90px] md:pl-[125px] lg:pl-[130px]">
        <Routes>
          <Route path="/" element={<PodcastPreview />} />
          <Route path="/id/:id" element={<DisplayPodcast />} />
          <Route path="/genre/{genreId}" element={<DisplayGenre />} />
          <Route path="/favourites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

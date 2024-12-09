import { GenreListProps } from "./interfaces";
import { useNavigate } from "react-router-dom";

const genreTitles: Record<number, string> = {
  1: "Personal Growth",
  2: "Investigative Journalism",
  3: "History",
  4: "Comedy",
  5: "Entertainment",
  6: "Business",
  7: "Fiction",
  8: "News",
  9: "Kids and Family",
};

function GenreList({ genres }: GenreListProps) {
  const navigate = useNavigate();

  return (
    <div>
      <ul className="flex flex-wrap gap-4">
        {Object.entries(genres).map(([id, title]) => (
          <li key={id}>
            <button
              onClick={() => navigate(`/genre/${id}`)}
              className="p-4 rounded-full text-white bg-[var(--primaryDark)] hover:bg-[var(--primaryLight)] hover:text-black"
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GenreList;

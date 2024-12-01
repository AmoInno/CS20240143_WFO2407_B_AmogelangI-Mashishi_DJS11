import { GenreListProps } from "./interfaces";

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
function GenreList({ genres, onGenreClick }: GenreListProps) {
  return (
    <div>
      <ul>
        {Object.entries(genres).map(([id, title]) => (
          <li key={id}>
            <button
              onClick={() => onGenreClick(Number(id))}
              className="text-blue-500 hover:underline"
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

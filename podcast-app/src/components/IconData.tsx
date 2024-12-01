import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const IconData = [
  { title: "Home", icon: <AddHomeWorkIcon />, link: "/" },
  { title: "Library", icon: <LocalLibraryIcon />, link: "/genre/{genreId}" },
  { title: "Favourites", icon: <FavoriteBorderIcon />, link: "./favourites" },
];

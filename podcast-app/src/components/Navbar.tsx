import SearchIcon from "@mui/icons-material/Search";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import { IconData } from "./IconData";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex w-full p-3 justify-between items-center shadow-lg bg-[var(--primaryLight)] z-40 fixed top-0 left-0 w-full ">
      {/* Hamburger menu */}
      <div className="flex justify-between items-center w-full sm:w-1/6 mx-8">
        <MenuRoundedIcon
          className="cursor-pointer "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div
          className={`absolute top-24  h-screen w-56 bg-[var(--primaryLight)] ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {IconData.map((value, key) => {
            // Makes a list of each item in the array & displays the title and the icon in the browser
            return (
              <li
                className="list-none"
                key={key}
                onClick={() => {
                  navigate(value.link); // When you click on each list item, it will change to the its specific location
                }}
              >
                <div className="flex flex-col items-center mb-5  hover:bg-[var(--secondaryLight)] cursor-pointer transition-all duration-300 ease-in-out">
                  <div className="text-3xl">{value.icon}</div>
                  <div className="text-xs">{value.title}</div>
                </div>
              </li>
            );
          })}
        </div>
        <div>
          <img
            src="./src/assets/logo-2.png"
            alt="podcast logo"
            className="hidden md:block max-w-24 hover:scale-105 transition-all  ml-4"
          />
        </div>
      </div>
      <div className="flex items-center gap-5 w-4/6 justify-end">
        <div className="flex items-center relative justify-between gap-10 w-full">
          <SearchIcon className="absolute left-3 text-3xl text-gray-500" />
          <input
            type="text"
            placeholder=" Search"
            className="w-full py-3 pl-12 rounded-3xl border-2 border-orange-200  focus:outline-[var(--accentColor)] "
          />
          <div>
            <p className="bg-[var(--secondaryLight)] text-white px-4 py-1 rounded-full w-12 h-12 flex justify-center items-center">
              A
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

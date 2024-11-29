import SearchIcon from "@mui/icons-material/Search";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import { IconData } from "./IconData";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex w-full h-full p-5 justify-between items-center shadow-lg bg-[var(--primaryLight)]">
      {/* Hamburger menu */}
      <div className="flex justify-center items-center gap-16 w-1/6 mx-8">
        <MenuRoundedIcon
          className="cursor-pointer "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div
          className={`absolute start-1 top-24  h-screen w-56 bg-[var(--primaryLight)] z-50 ${
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
                  window.location.pathname = value.link; // When you click on each list item, it will change to the its specific location
                }}
              >
                <div className="flex flex-col items-center mb-5 p-2  hover:bg-[var(--hoverColor)] cursor-pointer">
                  <div className="size-7 ">{value.icon}</div>
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
            className="max-w-24 hover:scale-105 transition-all  ml-4"
          />
        </div>
      </div>
      <div className="items-center gap-5 w-4/6">
        <div className="flex items-center relative justify-between gap-10 w-full">
          <SearchIcon className="absolute left-3 text-3xl text-gray" />
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

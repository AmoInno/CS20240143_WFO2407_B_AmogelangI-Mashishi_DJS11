import { useNavigate } from "react-router-dom";
import { IconData } from "./IconData";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center md:w-28 fixed bottom-0 top-0 left-0 h-screen bg-[var(--primaryLight)] z-30 transition-all ease-in-out pt-24">
      <ul>
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
              <div className="flex flex-col items-center mb-5 p-2  hover:bg-[var(--secondaryLight)] cursor-pointer transition-all duration-300 ease-in-out">
                <div className="size-7 ">{value.icon}</div>
                <div className="text-xs">{value.title}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

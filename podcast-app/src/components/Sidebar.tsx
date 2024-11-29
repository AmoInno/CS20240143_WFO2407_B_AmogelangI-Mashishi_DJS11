import { IconData } from "./IconData";

function Sidebar() {
  return (
    <div className="mt-4 w-28 h-screen shadow-lg">
      <ul>
        {IconData.map((value, key) => {
          // Makes a list of each item in the array & displays the title and the icon in the browser
          return (
            <li
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
      </ul>
    </div>
  );
}

export default Sidebar;

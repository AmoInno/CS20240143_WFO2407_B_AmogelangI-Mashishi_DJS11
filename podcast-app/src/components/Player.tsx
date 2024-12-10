import ShuffleOutlinedIcon from "@mui/icons-material/ShuffleOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
const Player = () => {
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src="" alt="" />
        <div>
          <p>episode.title</p>
          <p>episode.description.slice(0,12)</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <ShuffleOutlinedIcon className="w-4 cursor-pointer" />
          <ArrowBackIosNewIcon className="w-4 cursor-pointer" />
          <PlayCircleOutlineIcon className="w-4 cursor-pointer" />
          <ArrowForwardIosIcon className="w-4 cursor-pointer" />
          <LoopOutlinedIcon className="w-4 cursor-pointer" />
        </div>
        <div className="flex items-center gap-5">
          <p>1:06</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          <p>3:08</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <PlayArrowOutlinedIcon className="w-4 cursor-pointer" />
      </div>
    </div>
  );
};

export default Player;

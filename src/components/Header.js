import React from "react";
import hamburger from "../Assests/images/hamburger.png";
import youtube from "../Assests/images/youtube_icon.png";
import { BsBell } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {

  const dispatch = useDispatch();
  const handletoggleMenu = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="p-2">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start space-x-4 md:justify-between md:space-x-0">
        <div className="p-2">
          <img alt="hamburger image" src={hamburger} className="h-8" onClick={()=> handletoggleMenu()} />
        </div>
        <div className="px-2 sm:px-4 md:px-10">
          <img
            alt="youtube image"
            src={youtube}
            className="h-8 sm:h-10 md:h-12"
            style={{ transform: "scale(2)" }}
          />
        </div>
        <div className="ml-4 sm:ml-4 flex lg:px-40">
          <input
            type="text"
            className="p-2 bg-gray-200 w-36 sm:w-48 md:w-96 border border-black rounded-lg"
            placeholder="Search"
          />
          <div className="p-1">
          <button className="hidden lg:inline-block p-2 font-bold bg-gray-200 rounded-lg">Search</button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <button className=" hover:cursor-pointer">Upload</button>
        <button className="hover:underline">{<BsBell/>}</button>
        <button className=" hover:underline">{<AiOutlineUser/>}</button>  
      </div>
    </div>
  </div>
  );
};

export default Header;

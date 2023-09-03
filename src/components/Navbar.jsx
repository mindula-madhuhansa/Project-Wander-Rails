import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import {
  FaXmark,
  FaBars,
  FaWallet,
  FaUser,
  FaHouse,
  FaCircleUser,
  FaQuestion,
  FaComment,
  FaMap,
} from "react-icons/fa6";

export default function Navbar() {
  const [toggleNabBar, setToggleNavBar] = useState(false);

  const handleClickNavBar = () => {
    setToggleNavBar(!toggleNabBar);
  };

  return (
    <div className="w-full h-[80px] z-10 bg-primary drop-shadow-lg relative">
      <div className="flex justify-between items-center w-full h-full m-auto">
        <div className="flex items-center">
          <Link to={"/"}>
            <img
              src={Logo}
              alt="logo"
              className="sm:ml-10 ss:ml-10 md:ml-20 w-auto h-[64px]"
            />
          </Link>
        </div>

        <div className="flex items-center">
          <ul className="hidden md:flex text-white text-2xl gap-12">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/plan"}>
              <li>Plan</li>
            </Link>
            <Link to={"/"}>
              <li>About</li>
            </Link>
            <Link to={"/"}>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>

        <div className="hidden md:flex sm:mr-24 md:mr-24 gap-12">
          <Link to={"/"}>
            <FaWallet color="white" size={24} />
          </Link>
          <Link to={"/"}>
            <FaUser color="white" size={24} />
          </Link>
        </div>

        <div
          className="md:hidden cursor-pointer mr-10"
          onClick={handleClickNavBar}
        >
          {toggleNabBar ? (
            <FaXmark color="white" size={32} />
          ) : (
            <FaBars color="white" size={32} />
          )}
        </div>
      </div>

      <ul
        className={
          toggleNabBar
            ? `bg-primary w-1/3 h-screen px-8 md:hidden text-white text-xl absolute`
            : `hidden`
        }
      >
        <Link to={"/"}>
          <div className="nav-item">
            <FaHouse />
            <li>Home</li>
          </div>
          <hr />
        </Link>
        <Link to={"/"}>
          <div className="nav-item">
            <FaCircleUser />
            <li>Profile</li>
          </div>
          <hr />
        </Link>
        <Link to={"/plan"}>
          <div className="nav-item">
            <FaMap />
            <li>Plan</li>
          </div>
          <hr />
        </Link>
        <Link to={"/"}>
          <div className="nav-item">
            <FaQuestion />
            <li>About</li>
          </div>
          <hr />
        </Link>
        <Link to={"/"}>
          <div className="nav-item">
            <FaComment />
            <li>Contact Us</li>
          </div>
          <hr />
        </Link>
        <Link to={"/"}>
          <div className="nav-item">
            <FaWallet />
            <li>Wallet</li>
          </div>
        </Link>
      </ul>
    </div>
  );
}

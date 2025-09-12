import Image from "next/image";
import Link from "next/link";
import spotifyLogo from "../assets/images/logo.png";
import { MdHomeFilled } from "react-icons/md";
import { GoSearch } from "react-icons/go";

export default function Navbar() {
  return (
    <nav className="h-15 flex justify-between items-center px-6 fixed top-0 left-0 w-full bg-black z-100">
      {/* Left */}
      <div className="flex gap-6 items-center">
        <Image
          src={spotifyLogo}
          alt="spotify-logo"
          width={500}
          height={500}
          className="w-9 h-9"
        />
        <Link
          href="/"
          className="bg-background w-11 h-11 grid place-items-center rounded-full text-3xl text-white"
        >
          <MdHomeFilled />
        </Link>
        <div className="bg-backgroud hidden lg:flex items-center h-11 w-90 px-3 gap-3 rounded-full text-primary-text">
          <GoSearch className="text-primary-text shrink-0" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="w-full h-full bg-background placeholder:text-primary-text outline-none"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex gap-8 items-center">
        <div className="hidden lg:flex gap-2 text-secondary-text font-bold border-r-2 border-primary-text pr-6">
          <a href="#" className="hover:text-primary-text">
            Premium
          </a>
          <a href="#" className="hover:text-primary-text">
            Support
          </a>
          <a href="#" className="hover:text-primary-text">
            Download{" "}
          </a>
        </div>
        <div>
          <Link
            href="/login"
            className="bg-white text-gray-950 rounded-full font-bold hover:bg-secondary-text px-8 py-2 grid place-items-center"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { LuPlus } from "react-icons/lu";
import coverImage1 from "../assets/images/cover-michael-jackson.jpeg";
import coverImage2 from "../assets/images/cover-backstreet-boys.jpeg";
import coverImage3 from "../assets/images/cover-enhypen.jpeg";
import coverImage4 from "../assets/images/cover-edsheeran.jpg";
import { RxDotFilled } from "react-icons/rx";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { useState } from "react";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <aside
        className={`fixed left-2 top-15 bg-background w-75 rounded-lg h-[90vh] p-2 overflow-y-auto transition-transform duration-500 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between text-primary-text items-center p-2 mb-4">
          <h2 className="font-bold">Your Library</h2>
          <Link href="upload-song">
            <LuPlus size={20} />
          </Link>
        </div>
      </aside>

      <button
        className="fixed bottom-5 left-5 w-12 h-12 grid place-items-center bg-background p-4 rounded-full text-white z-50 cursor-pointer"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <MdOutlineLibraryMusic />
      </button>
    </div>
  );
}

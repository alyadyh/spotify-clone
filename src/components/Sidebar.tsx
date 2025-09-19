"use client";

import Image from "next/image";
import Link from "next/link";
import { LuPlus } from "react-icons/lu";
import coverImage1 from "../assets/images/cover-michael-jackson.jpeg";
import coverImage2 from "../assets/images/cover-backstreet-boys.jpeg";
import coverImage3 from "../assets/images/cover-enhypen.jpeg";
import coverImage4 from "../assets/images/cover-edsheeran.jpg";
import coverImage5 from "../assets/images/cover-tulus.jpg";
import { RxDotFilled } from "react-icons/rx";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

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
        <div>
          {/* List 1 */}
          <div className="flex relative gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover group">
            <button className="text-secondary-text absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hidden group-hover:block">
              <FaTrash />
            </button>
            <Image
              src={coverImage1}
              alt="cover-image"
              width={300}
              height={300}
              className="w-10 h-10 object-cover rounded-md"
            />

            <div>
              <p className="text-primary-text font-semibold">Thriller</p>
              <div className="flex flex-row items-center text-secondary-text text-sm">
                <p>Album</p>
                <RxDotFilled className="mt-1" />
                <p>Michael Jackson</p>
              </div>
            </div>
          </div>

          {/* List 2 */}
          <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover-bg-hover">
            <Image
              src={coverImage2}
              alt="cover-image"
              width={300}
              height={300}
              className="w-10 h-10 object-cover rounded-md"
            />

            <div>
              <p className="text-primary-text font-semibold">Millenium</p>
              <div className="flex flex-row items-center text-secondary-text text-sm">
                <p>Album</p>
                <RxDotFilled className="mt-1" />
                <p>Backstreet Boys</p>
              </div>
            </div>
          </div>

          {/* List 3 */}
          <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover-bg-hover">
            <Image
              src={coverImage3}
              alt="cover-image"
              width={300}
              height={300}
              className="w-10 h-10 object-cover rounded-md"
            />

            <div>
              <p className="text-primary-text font-semibold">宵-YOI-</p>
              <div className="flex flex-row items-center text-secondary-text text-sm">
                <p>Single</p>
                <RxDotFilled className="mt-1" />
                <p>ENHYPEN</p>
              </div>
            </div>
          </div>

          {/* List 4 */}
          <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover-bg-hover">
            <Image
              src={coverImage4}
              alt="cover-image"
              width={300}
              height={300}
              className="w-10 h-10 object-cover rounded-md"
            />

            <div>
              <p className="text-primary-text font-semibold">÷ (Deluxe)</p>
              <div className="flex flex-row items-center text-secondary-text text-sm">
                <p>Album</p>
                <RxDotFilled className="mt-1" />
                <p>Ed Sheeran</p>
              </div>
            </div>
          </div>

          {/* List 5 */}
          <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover-bg-hover">
            <Image
              src={coverImage5}
              alt="cover-image"
              width={300}
              height={300}
              className="w-10 h-10 object-cover rounded-md"
            />

            <div>
              <p className="text-primary-text font-semibold">Manusia</p>
              <div className="flex flex-row items-center text-secondary-text text-sm">
                <p>Album</p>
                <RxDotFilled className="mt-1" />
                <p>Tulus</p>
              </div>
            </div>
          </div>
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

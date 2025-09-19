import Image from "next/image";
import spotifyLogo from "@/assets/images/logo.png";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center w-full bg-hover">
      <div className="bg-background flex flex-col items-center px-6 lg:px-12 py-6 rounded-md max-w-[400px] w-[90%]">
        <Image
          src={spotifyLogo}
          alt="logo"
          width={500}
          height={500}
          className="h-11 w-11"
        />
        <h2 className="text-2xl font-bold text-white my-2 mb-8 text-center">
          Upload to Spotify
        </h2>
        <form>
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 rounded-md outline-none border-1 border-neutral-600 text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text"
          />
          <input
            type="text"
            placeholder="Artist"
            className="w-full p-2 rounded-md outline-none border-1 border-neutral-600 text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text"
          />
          <label htmlFor="audio" className="block py-2 text-secondary-text">
            Audio
          </label>
          <input
            type="file"
            placeholder="Artist"
            className="w-full p-2 rounded-md outline-none border-1 border-neutral-600 text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text"
          />
          <label htmlFor="cover" className="block py-2 text-secondary-text">
            Cover Image
          </label>
          <input
            type="file"
            placeholder="Artist"
            className="w-full p-2 rounded-md outline-none border-1 border-neutral-600 text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text"
          />
          <button className="bg-primary py-3 rounded-full w-full font-bold cursor-pointer">
            Add Song
          </button>
        </form>
      </div>
    </div>
  );
}

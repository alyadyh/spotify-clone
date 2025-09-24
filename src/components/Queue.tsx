import Image from "next/image";
import coverImage1 from "../assets/images/cover-michael-jackson.jpeg";

export default function Queue() {
  return (
    <div className="fixed top-18 right-8 z-50 max-w-[300px] w-full h-[75vh] bg-black border-1 p-4 overflow-y-auto rounded-md">
      <h2 className="text-white font-bold">Queue</h2>
      <div className="mt-8">
        <h2 className="text-white font-bold mb-3">Now Playing</h2>
        <div className="flex items-center gap-2 cursor-pointer mb-2 p-2 rounded-lg hover:bg-hover">
          <Image
            src={coverImage1}
            alt="Album 1"
            width={500}
            height={500}
            className="rounded-md w-10 h-10 object-cover"
          />
          <div>
            <p className="text-primary font-semibold">Thriller</p>
            <p className="text-secondary-text text-sm">Michael Jackson</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import coverImage1 from "../assets/images/cover-michael-jackson.jpeg";
import coverImage3 from "../assets/images/cover-enhypen.jpeg";
import coverImage4 from "../assets/images/cover-edsheeran.jpg";
import coverImage5 from "../assets/images/cover-tulus.jpg";

export default function Queue() {
  return (
    <div className="fixed top-18 right-8 z-50 max-w-[300px] w-full h-[75vh] bg-black border-1 p-4 overflow-y-auto rounded-md">
      <h2 className="text-white font-bold">Queue</h2>
      <div className="mt-8">
        <h2 className="text-white font-bold mb-3">Now Playing</h2>
        <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-hover">
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
      <div className="mt-8">
        <h2 className="text-white font-bold mb-3">Next up</h2>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-hover">
            <Image
              src={coverImage3}
              alt="Album 3"
              width={500}
              height={500}
              className="rounded-md w-10 h-10 object-cover"
            />
            <div>
              <p className="text-primary font-semibold">Echoes</p>
              <p className="text-secondary-text text-sm">Enhypen</p>
            </div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-hover">
            <Image
              src={coverImage5}
              alt="Album 5"
              width={500}
              height={500}
              className="rounded-md w-10 h-10 object-cover"
            />
            <div>
              <p className="text-primary font-semibold">Manusia</p>
              <p className="text-secondary-text text-sm">Tulus</p>
            </div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-hover">
            <Image
              src={coverImage4}
              alt="Album 4"
              width={500}
              height={500}
              className="rounded-md w-10 h-10 object-cover"
            />
            <div>
              <p className="text-primary font-semibold">Perfect</p>
              <p className="text-secondary-text text-sm">Ed Sheeran</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

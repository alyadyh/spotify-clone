import Image from "next/image";
import coverImage1 from "../assets/images/cover-michael-jackson.jpeg";
import coverImage2 from "../assets/images/cover-backstreet-boys.jpeg";
import coverImage3 from "../assets/images/cover-enhypen.jpeg";
import coverImage4 from "../assets/images/cover-edsheeran.jpg";
import coverImage5 from "../assets/images/cover-tulus.jpg";

export default function AllSongs() {
  return (
    <div className="min-h-[90vh] bg-background my-15 p-4 lg:ml-80 rounded-lg mx-4">
      <h2 className="text-2xl text-white mb-1 font-bold">Recently Played</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {/* List 1 */}
        <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
          <Image
            src={coverImage1}
            alt="Album 1"
            width={500}
            height={500}
            className="rounded-md w-full h-50 object-cover"
          />
          <div className="mt-2">
            <p className="text-primary-text font-semibold">Thriller</p>
          </div>
        </div>

        {/* List 2 */}
        <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
          <Image
            src={coverImage2}
            alt="Album 2"
            width={500}
            height={500}
            className="rounded-md w-full h-50 object-cover"
          />
          <div className="mt-2">
            <p className="text-primary-text font-semibold">Millenium</p>
          </div>
        </div>
        {/* List 3 */}
        <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
          <Image
            src={coverImage3}
            alt="Album 3"
            width={500}
            height={500}
            className="rounded-md w-full h-50 object-cover"
          />
          <div className="mt-2">
            <p className="text-primary-text font-semibold">宵-YOI-</p>
          </div>
        </div>
        {/* List 4 */}
        <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
          <Image
            src={coverImage4}
            alt="Album 4"
            width={500}
            height={500}
            className="rounded-md w-full h-50 object-cover"
          />
          <div className="mt-2">
            <p className="text-primary-text font-semibold">÷ (Deluxe)</p>
          </div>
        </div>
        {/* List 5 */}
        <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
          <Image
            src={coverImage5}
            alt="Album 5"
            width={500}
            height={500}
            className="rounded-md w-full h-50 object-cover"
          />
          <div className="mt-2">
            <p className="text-primary-text font-semibold">Manusia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

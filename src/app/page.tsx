import AllSongs from "@/components/AllSongs";
import MusicPlayer from "@/components/MusicPlayer";
import Navbar from "@/components/Navbar";
import Queue from "@/components/Queue";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Sidebar />
        <Queue />
        <MusicPlayer />
        <AllSongs />
      </main>
    </div>
  );
}

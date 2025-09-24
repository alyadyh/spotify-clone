import MusicPlayer from "@/components/MusicPlayer";
import Navbar from "@/components/Navbar";
import Queue from "@/components/Queue";
import Sidebar from "@/components/Sidebar";

export default function FrontendLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="min-h-screen">
        <Navbar />
        <main>
          <Sidebar />
          <Queue />
            <MusicPlayer />
            {children}
        </main>
    </div>
  )
}

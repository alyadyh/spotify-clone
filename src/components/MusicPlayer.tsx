"use client";

import Image from "next/image";
import coverImage1 from "../assets/images/cover-michael-jackson.jpeg";
import {
  IoMdPause,
  IoMdPlay,
  IoMdSkipBackward,
  IoMdSkipForward,
  IoMdVolumeHigh,
} from "react-icons/io";
import { LuRepeat1 } from "react-icons/lu";
import { MdOutlineQueueMusic } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime); //updating the song every second
      setDuration(audio.duration | 0);
    };
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadmetadata", handleTimeUpdate);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white px-4 py-3 shadow-md z-50">
      <audio ref={audioRef} src="/audio/Thriller.mp3" controls></audio>
      <div className="max-w-8xl w-[95%] mx-auto flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Image
            src={coverImage1}
            alt="Album 1"
            width={500}
            height={500}
            className="w-13 h-13 object-cover rounded-md"
          />
          <div className="text-sm">
            <p className="text-white">Michael Jackson</p>
            <p className="text-secondary-text font-normal">Thriller</p>
          </div>
        </div>

        {/* Song Controls */}
        <div className="max-w-[400px] w-full flex items-center flex-col gap-3">
          <div className="flex gap-4">
            <button className="text-xl text-secondary-text">
              <IoMdSkipBackward />
            </button>
            <button
              className="bg-white text-xl text-black w-10 h-10 rounded-full grid place-items-center cursor-pointer"
              onClick={togglePlayPause}
            >
              {isPlaying ? <IoMdPause /> : <IoMdPlay />}
            </button>
            <button className="text-xl text-secondary-text">
              <IoMdSkipForward />
            </button>
          </div>

          <div className="w-full flex justify-center items-center gap-2">
            <span className="text-secondary-text font-normal text-sm">
              {formatTime(currentTime)}
            </span>
            <div className="w-full">
              <input
                onChange={handleSeek}
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                className="w-full outline-none h-1 bg-zinc-700 rounded-md appearance-none accent-white"
              />
            </div>
            <span className="text-secondary-text font-normal text-sm">
              {formatTime(duration)}
            </span>
          </div>
        </div>
        {/* Volume Controls */}
        <div className="flex items-center gap-2">
          <button>
            <LuRepeat1 />
          </button>
          <button className="text-secondary-text text-xl cursor-pointer">
            <MdOutlineQueueMusic />
          </button>
          <button className="text-secondary-text text-xl cursor-pointer">
            <IoMdVolumeHigh />
          </button>
          <input
            type="range"
            min={0}
            max={100}
            className="w-[100px] outline-none h-1 bg-zinc-700 appearance-none accent-white"
          />
        </div>
      </div>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const StayBanner = () => {
  const videoRef = useRef(null);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handlePlayWithSound = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play();
      setIsSoundPlaying(true);
    }
  };

  const togglePause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPaused(false);
      } else {
        video.pause();
        setIsPaused(true);
      }
    }
  };
  return (
    <div className="bg-primary-gray2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[90vh] overflow-hidden  md:rounded-bl-[60px] md:rounded-br-[60px]"
      >
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/instagram/insta-4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Text + Buttons */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 bg-black/30 px-4 space-y-4">
          {!isSoundPlaying ? (
            <button
              onClick={handlePlayWithSound}
              className="px-6 py-3 bg-[rgb(110,97,70)] text-[#D1C8C1] font-semibold rounded-full shadow-md hover:scale-105 transition"
            >
              ▶ Play with Sound
            </button>
          ) : (
            <button
              onClick={togglePause}
              className="px-6 py-3 bg-[rgb(110,97,70)] text-[#D1C8C1] font-semibold rounded-full shadow-md hover:scale-105 transition"
            >
              {isPaused ? "⏵ Resume Video" : "⏸ Pause Video"}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default StayBanner;

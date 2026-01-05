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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[90vh] overflow-hidden rounded-bl-[60px] rounded-br-[60px]"
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

        <motion.h1
          className="font-primary font-medium text-2xl md:text-6xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Discover Your Ideal Eco Stay Near Bhopal & Ratapani
        </motion.h1>
        <motion.p
          className="font-arial-narrow text-md md:text-2xl mt-2 max-w-5xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          At Madhuban Eco Retreat, every stay blends natural serenity with
          eco-friendly comfort. From safari tents and mud houses to glamping,
          camping, and poolside villas, each space invites you to slow down and
          reconnect with nature. Located near the lush Ratapani Wildlife
          Sanctuary, Madhuban is one of the best eco stays near Bhopal for
          families, couples, adventure seekers, and wellness travelers.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default StayBanner;

// GlowingBackground.jsx
import React from "react";

const GlowingBackground = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Main glowing blob */}
      <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 opacity-40 blur-3xl animate-pulse mix-blend-lighten" />
      
      {/* Optional extra blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-pink-500 opacity-30 blur-2xl animate-ping" />
      <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-blue-500 opacity-30 blur-2xl animate-ping" />

      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">Glowing Background ✨</h1>
      </div>
    </div>
  );
};

export default GlowingBackground;

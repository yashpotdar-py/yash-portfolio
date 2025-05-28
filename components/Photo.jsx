"use client";

const PhotoComponent = () => (
  <div className="relative w-80 h-80 xl:w-96 xl:h-96">
    {/* Outer glow ring */}
    <div className="absolute inset-0 bg-gradient-to-r from-accent/30 via-accent-hover/20 to-primary/30 rounded-full blur-2xl animate-pulse" />

    {/* Main container with glassmorphism */}
    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-3 shadow-2xl">
      {/* Inner gradient border */}
      <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/20 via-transparent to-primary/20 p-1">
        {/* Image container */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10">
          {/* Actual photo */}
          <img
            src="/assets/photo-nobg.png"
            alt="Yash Potdar - AI/ML Developer"
            className="w-full h-full object-cover object-center rounded-full transform hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay gradient for modern effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent rounded-full" />

          {/* Floating accent dots */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full animate-ping" />
          <div className="absolute bottom-6 left-6 w-2 h-2 bg-accent-hover rounded-full animate-pulse delay-1000" />
        </div>
      </div>
    </div>

    {/* Additional decorative elements */}
    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-accent to-accent-hover rounded-full animate-bounce delay-500" />
    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse delay-700" />
  </div>
);

export default PhotoComponent;

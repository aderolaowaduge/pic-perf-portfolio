import { ParallaxBanner } from 'react-scroll-parallax';

const QuoteSection = ({ quote, image, author, paddingY = '' }) => {
  return (
    <ParallaxBanner
      // Parallax background image layer with negative speed for subtle upward movement on scroll
      layers={[{ image: image, speed: -20 }]}
      // Container styles: fixed height, flex center content, and optional vertical padding
      className={`relative h-72 md:h-96 flex items-center justify-center ${paddingY}`}
    >
      {/* Dark semi-transparent overlay to improve text readability over the image */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* Top gradient fade for smooth transition from background color to image */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-earth-bg via-transparent to-transparent z-20" />

      {/* Bottom gradient fade for smooth transition from background color to image */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-earth-bg via-transparent to-transparent z-20" />

      {/* Quote text container - positioned above overlays with padding and max width */}
      <div className="relative z-30 px-6 text-center max-w-3xl mx-auto">
        {/* Quote text styled with handwritten font, italics, and responsive size */}
        <p className="text-2xl md:text-3xl font-handwritten italic text-earth-light">
          “{quote}”
        </p>

        {/* Optional author attribution, styled smaller and aligned to the right */}
        {author && (
          <p className="text-earth-light font-semibold text-sm mt-4 text-right italic pr-2">
            — {author}
          </p>
        )}
      </div>
    </ParallaxBanner>
  );
};

export default QuoteSection;

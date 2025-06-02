import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react'; // Upward arrow icon
import { motion } from 'framer-motion';   // For animation

// Component that displays a "Back to Top" button when user scrolls down
const BackToTop = () => {
  // Tracks whether the button should be visible
  const [visible, setVisible] = useState(false);

  // Adds a scroll event listener when the component mounts
  useEffect(() => {
    const onScroll = () => {
      // Show button if user scrolls down more than 300px
      if (window.pageYOffset > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener('scroll', onScroll);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Smooth scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If not visible, render nothing
  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="z-20 fixed bottom-6 right-6 text-earth-accent-dark bg-black/40 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-opacity-100 transition"
      style={{ fontSize: '2rem', lineHeight: '1' }}
    >
      {/* Animate the up arrow with a subtle bouncing motion */}
      <motion.div
        animate={{ y: [0, -6, 0] }} // Moves up 6px then back
        transition={{ duration: 2, repeat: Infinity }} // Repeats infinitely every 2s
      >
        <ChevronUp className="w-6 h-6" strokeWidth={2.5} />
      </motion.div>
    </button>
  );
};

export default BackToTop;

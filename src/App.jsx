// --- React & Library Imports ---
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

// --- Image Lightbox Plugin & Styles ---
import Lightbox from 'yet-another-react-lightbox';
import { Download, Zoom } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/styles.css';

// --- Custom Components & Assets ---
import photos from './photos';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Gallery from './Gallery';
import ContactSection from './ContactSection';
import QuoteSection from './QuoteSection';
import Footer from './Footer';
import BackToTop from './BackToTop';
import './index.css';

function App() {
  // State to control which photo is selected in the lightbox
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Parallax Context Provider */}
      <ParallaxProvider>
        <div className="bg-earth-bg text-earth-dark font-sans min-h-screen">
          
          {/* Hero Banner with Parallax Effect */}
          <ParallaxBanner
            layers={[{ image: '/assets/images/ayeyi20.jpg', speed: -20 }]}
            className="aspect-[2/1] relative mb-8"
          >
            {/* Black overlay to darken image */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Gradient overlay and centered intro text */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/50 flex flex-col items-center justify-center px-6">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-handwritten text-white drop-shadow-lg text-center"
              >
                Picture Perfect by Aderola
              </motion.h1>

              <p className="mt-2 text-lg text-white italic text-center max-w-md">
                Capturing stories through my lens
              </p>

              {/* Bouncing down arrow animation */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-6"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </div>
          </ParallaxBanner>

          {/* About Me Section */}
          <section id="about">
            <AboutMe />
          </section>

          {/* Quote Block with Image */}
          <QuoteSection
            quote="This is what I like about photographs. They're proof that once, even if just for a heartbeat, everything was perfect"
            image="/assets/images/koko_solo.jpg"
            author="Jodi Picoult"
            paddingY="my-30"
          />

          {/* Photo Gallery Section */}
          <section id="gallery">
            <Gallery photos={photos} onPhotoClick={setSelectedIndex} />
          </section>

          {/* Lightbox Modal for Viewing Selected Photo */}
          <Lightbox
            open={selectedIndex !== -1}
            close={() => setSelectedIndex(-1)}
            slides={photos.map((p) => ({ src: p.src, alt: p.alt }))}
            index={selectedIndex}
            styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}
            plugins={[Zoom]} // Download plugin removed for now
          />

          {/* Second Quote Block */}
          <QuoteSection
            quote="The world through my lens isn't just seen — it's felt."
            image="/assets/images/freedom.jpg"
            paddingY="my-16"
          />

          {/* Contact Section */}
          <section id="contact">
            <ContactSection />
          </section>

          {/* Footer Content */}
          <Footer />

          {/* Back to Top Floating Button */}
          <BackToTop />
        </div>
      </ParallaxProvider>
    </div>
  );
}

export default App;

import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function AboutMe() {
  return (
    <section className="mt-30 bg-black/20 backdrop-blur-md rounded-xl shadow-md max-w-6xl mx-auto my-16 px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Profile Photo */}
      <div className="flex-shrink-0">
        <img
          src="/assets/images/aderola_portrait.jpeg"
          alt="Portrait of Aderola"
          className="mr-1 w-48 h-48 rounded-2xl object-cover object-bottom shadow-lg bg-opacity-50"
        />
        <div className="absolute inset-0 bg-earth-bg/20 rounded-lg"></div>
      </div>

      {/* Text Content */}
      <div className="text-earth-light max-w-xl mr-5">
        <h3 className="text-3xl mb-4 font-handwritten">
          Hi, I'm Aderola! Welcome to my portfolio!
        </h3>
        <p className="text-lg leading-relaxed">
          My favorite thing about photography is the challenge of conveying
          emotion through a single moment in time. I draw a lot of inspiration
          for these projects from poetry, quotes, and the people around me. I
          hope you enjoy looking through my pictures!
        </p>
      </div>

      {/* Social Icons - visible only on large screems and up */}
      <div className="hidden lg:flex flex-col gap-4 items-center">
        <a
          href="https://instagram.com/pictureperfect_byaderola"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl text-gray-600 hover:text-earth-sand" />
        </a>
        <a
          href="https://linkedin.com/in/aderola-owaduge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl text-gray-600 hover:text-blue-600" />
        </a>
        <a href="mailto:artbyaderola@gmail.com">
          <FaEnvelope className="text-2xl text-gray-600 hover:text-earth-accent" />
        </a>
      </div>
    </section>
  );
}

export default AboutMe;

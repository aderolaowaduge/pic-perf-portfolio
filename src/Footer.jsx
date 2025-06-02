import { FaInstagram, FaGlobe, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-6 text-center text-sm text-earth-accent opacity-80 flex flex-col items-center gap-2">
      {/* Social media and contact links container */}
      <div className="flex gap-4 justify-center mb-1 flex-wrap">
        {/* Instagram link with icon and username */}
        <a
          href="https://instagram.com/pictureperfect_byaderola"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-pink-500"
        >
          <FaInstagram className="text-xl" />
          <span>@pictureperfect_byaderola</span>
        </a>

        {/* LinkedIn profile link with icon */}
        <a
          href="https://linkedin.com/in/aderola-owaduge"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-blue-600"
        >
          <FaLinkedin className="text-xl" />
          <span>LinkedIn</span>
        </a>

        {/* Email link with envelope icon */}
        <a
          href="mailto:artbyaderola@gmail.com"
          className="flex items-center gap-1 hover:text-green-500"
        >
          <FaEnvelope className="text-xl" />
          <span>Email</span>
        </a>

        {/* Personal website link with globe icon */}
        <a
          href="https://devbyderola.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-blue-500"
          title="Aderola's Coding Portfolio"
        >
          <FaGlobe className="text-xl" />
          <span>devbyderola.com</span>
        </a>
      </div>

      {/* Copyright notice with current year */}
      <div className="opacity-60">
        &copy; {new Date().getFullYear()} Picture Perfect by Aderola. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;

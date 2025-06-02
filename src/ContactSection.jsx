import ContactForm from './ContactForm';

function ContactSection() {
  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-10 p-6">
      {/* Left side: single photo container */}
      <div className="lg:w-2/3 w-full relative rounded-lg overflow-hidden shadow-lg">
        {/* Main image displayed on the left */}
        <img
          src="/assets/images/pic_perf_logo.png"
          alt="Contact section background"
          className="object-contain w-full h-full relative z-0"
        />
        {/* Semi-transparent black overlay to soften the image */}
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
      </div>

      {/* Right side: contact form container */}
      <section className="lg:w-1/3 w-full relative rounded-xl bg-black backdrop-blur-md p-8 shadow-lg text-earth-light">
        {/* Decorative background image with very low opacity */}
        <img
          src="/assets/images/ayeyi20.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-5 pointer-events-none"
        />

        {/* The actual contact form component */}
        <ContactForm />
      </section>
    </div>
  );
}

export default ContactSection;

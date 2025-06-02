import { useState } from 'react';

// ContactForm component allows users to send a message via a simple contact form
function ContactForm() {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage form validation errors
  const [errors, setErrors] = useState({});

  // State to show submission status message
  const [submitStatus, setSubmitStatus] = useState(null);

  // Simple form validation logic
  const validate = () => {
    const newErrors = {};

    // Check if name is filled
    if (!formData.name.trim()) newErrors.name = 'Name is required';

    // Check if email is filled and valid
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address';
    }

    // Check if message is filled
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  // Handles changes to form inputs and updates state accordingly
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    // If no validation errors, "submit" form (simulate with console.log)
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);

      // Set a success message and reset form
      setSubmitStatus('Thank you for reaching out! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      // Clear submit message if form is invalid
      setSubmitStatus(null);
    }
  };

  return (
    <section className="max-w-lg mx-auto p-6 bg-black bg-opacity-20 backdrop-blur-sm rounded-xl shadow-lg text-earth-light">
      <h2 className="text-2xl font-semibold mb-4 text-center">Contact Me</h2>
      
      {/* Form begins */}
      <form onSubmit={handleSubmit} noValidate>
        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1 text-earth-accent">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded bg-earth-bg ${
              errors.name ? 'border border-red-500' : ''
            } text-earth-light placeholder-earth-accent`}
            aria-describedby="name-error"
            placeholder="Your name"
          />
          {/* Error message for name */}
          {errors.name && (
            <p id="name-error" className="text-red-600 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1 text-earth-accent">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded bg-earth-bg ${
              errors.email ? 'border border-red-500' : ''
            } text-earth-light placeholder-earth-accent`}
            aria-describedby="email-error"
            placeholder="you@example.com"
          />
          {/* Error message for email */}
          {errors.email && (
            <p id="email-error" className="text-red-600 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message Textarea */}
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium mb-1 text-earth-accent">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded bg-earth-bg ${
              errors.message ? 'border border-red-500' : ''
            } text-earth-light placeholder-earth-accent resize-y`}
            aria-describedby="message-error"
            placeholder="Write your message here..."
          />
          {/* Error message for message */}
          {errors.message && (
            <p id="message-error" className="text-red-600 text-sm mt-1">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-earth-bg hover:bg-green-950 text-earth-light font-semibold py-2 px-4 rounded w-full"
        >
          Send Message
        </button>
      </form>

      {/* Success message after submission */}
      {submitStatus && (
        <p className="mt-4 text-earth-accent font-medium text-center">
          {submitStatus}
        </p>
      )}
    </section>
  );
}

export default ContactForm;

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Let's Start a <span className="text-purple-600">Conversation</span></h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-8" data-aos="fade-right">
            <h3 className="text-xl font-bold mb-6">Send us a message</h3>
            
            {submitMessage && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                {submitMessage}
              </div>
            )}
            
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                />
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-md transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg shadow-md p-8" data-aos="fade-left">
            <h3 className="text-xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-lg mr-4">
                  <FaEnvelope className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email Us</h4>
                  <p className="text-white/90 mt-1">info@digitalagency.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-lg mr-4">
                  <FaPhone className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Call Us</h4>
                  <p className="text-white/90 mt-1">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-lg mr-4">
                  <FaMapMarkerAlt className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Visit Us</h4>
                  <p className="text-white/90 mt-1">123 Digital Avenue, Tech City</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                  <FaTwitter className="text-white w-5 h-5" />
                </a>
                <a className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                  <FaFacebook className="text-white w-5 h-5" />
                </a>
                <a className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                  <FaInstagram className="text-white w-5 h-5" />
                </a>
                <a className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                  <FaLinkedin className="text-white w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
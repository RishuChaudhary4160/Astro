import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactIcon from "../assets/images/animation/icons8-contact-us.gif";
import mailIcon from "../assets/images/animation/mail.gif";
import addressIcon from "../assets/images/animation/map.gif";
import { Avatar } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    document.title = "Contact Us | OM Astro Solution";
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill out all fields.");
      return;
    }
    // Simulate form submission (replace with API call if needed)
    setFormStatus("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormStatus(null), 3000);
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Breadcrumb title="Contact Us" />

      {/* Contact Info Section */}
      <div className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 animate-fade-in">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
                <Avatar>
                  <img
                    src={ContactIcon}
                    alt="phone icon"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Avatar>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="mt-2 text-gray-600">
                <a
                  href="tel:+919417339708"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  +91 9417339708
                </a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
                <Avatar>
                  <img
                    src={mailIcon}
                    alt="mail icon"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Avatar>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="mt-2 text-gray-600">
                <a
                  href="mailto:brijeshbhatt5699@gmail.com"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  brijeshbhatt5699@gmail.com
                </a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
                <Avatar>
                  <img
                    src={addressIcon}
                    alt="mail icon"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Avatar>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <p className="mt-2 text-gray-600">
                House number 20, Sector 11, Chandigarh
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Form */}
            <div className="flex flex-col justify-between bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h3>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    style={{ backgroundColor: "#ff9800" }}
                    onClick={handleSubmit}
                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                  {formStatus && (
                    <p
                      className={`text-center text-sm transition-opacity duration-300 ${
                        formStatus.includes("successfully")
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {formStatus}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="flex flex-col justify-between">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 animate-fade-in">
                Our Location
              </h3>
              <div className="flex-grow rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.164614139768!2d76.78373231508254!3d30.742157981627885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0a9f3b3b7b%3A0x4c3b3b7b3b7b3b7b!2sSector%2011%2C%20Chandigarh%2C%20160011%2C%20India!5e0!3m2!1sen!2sin!4v1696613223074!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map - Sector 11, Chandigarh"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;

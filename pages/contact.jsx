import Link from 'next/link';
import React, { useState } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { SiGmail } from "react-icons/si";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    }
    )
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting your query, please wait...⏳")
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setStatus("Message Sent Successfully✅");
        setTimeout(() => {
          setStatus("");
        }, 3000)
      } else {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setStatus("Error sending message")
      }
    } catch {
      setStatus("An Unknown Error Occured")
    }
  }
  return (
    <div className="bg-sky-50 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-6 overflow-hidden bg-sky-50">
        <div className="p-8 flex flex-col bg-sky-50 justify-center">
          <h1 className="text-3xl font-bold text-sky-500 mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            We would love to hear from you. Please fill out the form below to get in touch with us.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                required
                className="w-full bg-sky-50 p-2 border rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                required
                className="w-full bg-sky-50 p-2 border rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700">Phone</label>
              <input
                type="tel"
                onChange={handleChange}
                id="phone"
                name="phone"
                value={formData.phone}
                required
                className="w-full bg-sky-50 p-2 border rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                onChange={handleChange}
                rows="4"
                name="message"
                value={formData.message}
                required
                className="w-full bg-sky-50 p-2 border rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-all"
            >
              Send
            </button>
          </form>
          {status && (
            <p
              className={`text-lg mt-4 ${status.includes("Submitting")
                  ? "text-black"
                  : status.includes("Successfully")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
            >
              {status}
            </p>
          )}
        </div>
        <div className="p-8 bg-sky-50 flex flex-col justify-center items-center space-y-6">
          <div className="flex flex-col items-center">
            <div className="text-sky-500 mb-2">
              <FaMapMarkerAlt size={50} className="text-sky-500" />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold">Our Location</h2>
              <p className="text-gray-600">801, IIEIM, World Trade Center, Kharadi, Pune.</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-sky-500 mb-2">
              <IoMdCall size={50} className="text-sky-500" />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold ">Call Us</h2>
              <Link href={'tel:+917499837102'} className='text-gray-600'>7499837102</Link>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-sky-500 mb-2">
              <SiGmail size={50} className="text-sky-500" />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold">Email Us</h2>
              <p className="text-gray-600">info@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 shadow-lg rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.470889896284!2d73.94679037465292!3d18.552797568190073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3e7c664c90f%3A0xf54580a21070d190!2sIIEIM%20Pune%2C%20World%20Trade%20Center%2C%20kharadi%2C%20Pune!5e0!3m2!1sen!2sin!4v1736829542140!5m2!1sen!2sin"
          className="w-full h-80 md:h-96"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
export default ContactUs;

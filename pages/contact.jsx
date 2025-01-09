import React, { useState } from 'react';

const ContactUs = () => {

  const [formData,setFormData] = useState({
    name: "", 
    email:"", 
    phone:"", 
    message:""
  })
  const [status,setStatus] = useState("");

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData({...formData,
      [name]:value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setStatus("Submitting your query, please wait...")

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData)
      })
      if(response.ok) {
        setFormData({name:"", email:"", phone:"", message:""})
        setStatus("FormSubmitted Successfully")
      }
      else {
        setFormData({name:"", email:"", phone:"", message:""})
        setStatus("An Error Occured")
      }
    } catch(err) {
      setStatus("Error occured")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-6 shadow-lg rounded-lg overflow-hidden bg-white">
        {/* Left Section */}
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-sky-500 mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-6">We would love to hear from you. Please fill out the form below to get in touch with us.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
               onChange={handleChange}
                type="text"
                id="name"
                name='name'
                value={formData.name}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
              onChange={handleChange}
                type="email"
                id="email"
                name='email'
                value={formData.email}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700">Phone</label>
              <input
                type="tel"
                onChange={handleChange}
                id="phone"
                name='phone'
                value={formData.phone}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                onChange={handleChange}
                rows="4"
                name='message'
                value={formData.message}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
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
          {status && <p>{status}</p>}
        </div>

        {/* Right Section */}
        <div className="h-80 md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345091855!2d144.95592811531768!3d-37.81720997975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727b7c1fd2ce46!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633600384136!5m2!1sen!2sau"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

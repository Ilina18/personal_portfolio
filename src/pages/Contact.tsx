import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_p4ftyoh",      // Your Service ID
        "template_4wefx36",    // Your Template ID
        formData,              // Your form values
        "qRCq80-grS5Raljmq"    // Your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // reset form
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Get in touch</h1>
      <p className="text-gray-700 mb-4">
        Feel free to reach out via this form or connect on LinkedIn / GitHub.
      </p>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
        
        <label className="block mb-2 text-sm">Your name</label>
        <input
          name="name"
          className="w-full mb-3 p-2 border rounded"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className="block mb-2 text-sm">Your email</label>
        <input
          name="email"
          type="email"
          className="w-full mb-3 p-2 border rounded"
          placeholder="you@domain.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="block mb-2 text-sm">Message</label>
        <textarea
          name="message"
          className="w-full mb-3 p-2 border rounded"
          rows={5}
          placeholder="Hi! I'd like to work with you..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-4 py-2 rounded bg-primary text-white"
          >
            Send message
          </button>

          <span className="text-sm text-gray-500">{status}</span>
        </div>
      </form>
    </div>
  );
}

import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

function ContactUs() {
  const form = useRef();
  const [contactDetails, setContactDetails] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dl68r7c",
        "template_e7anlnb",
        form.current,
        "FIBgO9Z3WG6Dyqkdv"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send the message. Please try again.");
        }
      );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail(event);
  };

  const contextClass = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <>
      <div className="bg-blue-50 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Contact Us
          </h2>
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={contactDetails.name}
                onChange={handleInputChange}
                className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 hover:border-blue-300"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="Virtual MentorShip Hub"
                value={contactDetails.email}
                onChange={handleInputChange}
                className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 hover:border-blue-300"
                placeholder="example@mail.com"
                required
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={contactDetails.message}
                onChange={handleInputChange}
                className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 hover:border-blue-300"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-[#2BB17A] text-white rounded-lg hover:bg-[#1e513cf5] focus:outline-none focus:bg-[#67e6b1] focus:ring-4 focus:ring-blue-300"
              >
                Send Message
              </button>
            </div>
          </form>
          <ToastContainer
            position="bottom-center"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            toastClassName={({ type }) =>
              contextClass[type || "default"] +
              " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
            }
            bodyClassName="text-sm font-white font-med block p-3"
            progressClassName="fancy-progress-bar"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;



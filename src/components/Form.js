import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mvgewvbq");

  if (state.succeeded) {
    return (
      <p className="text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold text-xl py-10">
        Thanks for joining!
    </p>
    );
  }

  return (
    <div id="Form" className="flex justify-center items-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full w-6xl text-white max-w-lg bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-xl rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center mb-4">
            Contact Me
        </h2>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block  font-semibold mb-1">
            Your email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300"
            placeholder="Enter your email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block  font-semibold mb-1">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 resize-none"
            placeholder="Enter your message"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
        >
            Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

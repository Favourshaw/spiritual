"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Nav from "@/components/nav";

export default function BookSession() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { fullName, phoneNumber, message } = formData;

    const text = `Hello, my name is ${fullName}. I would like to book a session. Here's my message:\n\n${message}\n\nYou can reach me at: ${phoneNumber}`;

    const encodedText = encodeURIComponent(text);

    const whatsappNumber = "17787712682";
    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <Nav />
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-pink-50 via-rose-100 to-white">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg border border-pink-100">
          <h2 className="text-3xl font-bold text-center text-[#b497bd] mb-6">
            Book a Spiritual Session
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Let us know what you'd like help with..."
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-300 to-[#b497bd] text-white rounded-full px-6 py-3 text-lg shadow hover:shadow-md transition-all"
              >
                Book via WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

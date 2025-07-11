"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Nav from "@/components/nav";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
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

    const { fullName, email, phoneNumber, message } = formData;

    const text = `📬 New Contact Request\n\n👤 Name: ${fullName}\n📧 Email: ${email}\n📞 Phone: ${phoneNumber}\n💬 Message:\n${message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappNumber = "17787712682";

    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Nav />
      <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-pink-50 via-rose-100 to-white">
        <div className="bg-white rounded-2xl shadow-lg border border-pink-100 p-8 w-full max-w-2xl">
          <h2 className="text-3xl font-bold text-center text-[#b497bd] mb-6">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We&apos;d love to hear from you. Send us a message and we’ll get
            back to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  placeholder="Your full name"
                  className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>
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
                placeholder="Your phone number"
                className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-300 to-[#b497bd] text-white rounded-full px-6 py-3 text-lg shadow hover:shadow-md transition-all"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit form");
      }

      await response.json();

      // Reset form
      setFormData({
        name: "",
        email: "",
        department: "",
        message: "",
      });

      // Show success message
      setSuccess(true);
      setIsSubmitting(false);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Section - Contact Form */}
          <div className="w-full">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Need a hand?
              </h2>
              <p className="text-lg text-gray-300">
                Reach out to the world&apos;s most reliable IT services.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {success && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                  <p className="text-green-400 text-sm">
                    Thank you! Your message has been submitted successfully.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border border-gray-700",
                    "bg-gray-900/50 text-white placeholder-gray-400",
                    "focus:outline-none focus:ring-2 focus:ring-[#CE2029] focus:border-transparent",
                    "transition-all duration-200"
                  )}
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border border-gray-700",
                    "bg-gray-900/50 text-white placeholder-gray-400",
                    "focus:outline-none focus:ring-2 focus:ring-[#CE2029] focus:border-transparent",
                    "transition-all duration-200"
                  )}
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Please describe what you need.
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border border-gray-700",
                    "bg-gray-900/50 text-white placeholder-gray-400",
                    "focus:outline-none focus:ring-2 focus:ring-[#CE2029] focus:border-transparent",
                    "transition-all duration-200 resize-none"
                  )}
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full md:w-auto px-8 py-3 rounded-lg",
                  "bg-[#CE2029] text-white font-semibold text-base",
                  "hover:bg-[#b01d25] active:bg-[#8a161c]",
                  "focus:outline-none focus:ring-2 focus:ring-[#CE2029] focus:ring-offset-2 focus:ring-offset-gray-900",
                  "transition-all duration-200 shadow-lg hover:shadow-xl",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Submitting..." : "Get a free consultation"}
              </button>
            </form>
          </div>

          {/* Right Section - Contact Info with Map Background */}
          <div className="relative w-full min-h-[600px] rounded-2xl overflow-hidden  ">
            {/* World Map Background */}
            <div className="absolute inset-0 opacity-50">
              <Image
                src="/world-map.png"
                alt="World Map"
                fill
                className="object-contain object-center"
                priority
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 min-h-[600px] flex flex-col justify-center items-center p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase tracking-wide">
                REACH OUT NOW!
              </h3>

              <div className="mb-8">
                <a
                  href="tel:+919886858888"
                  className="text-4xl md:text-5xl font-bold text-[#ece5e5] hover:text-[#CE2029] transition-colors duration-200"
                >
                  +91 98868 58888
                </a>
              </div>

              <p className="text-base md:text-lg text-gray-300 mb-8 max-w-md">
                Start the collaboration with us while figuring out the best
                solution based on your needs.
              </p>

              <a
                href="https://maps.app.goo.gl/c7DwqbhjtcAGrb1L9"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 text-[#ece5e5] hover:text-[#CE2029]",
                  "font-medium transition-colors duration-200",
                  "group"
                )}
              >
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>View on Google map</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

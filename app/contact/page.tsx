'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { useDesign } from '@/app/providers/DesignProvider';
import { useTheme } from '@/app/providers/ThemeProvider';
import { getCardClasses, getPanelClasses, getAnimationDelay } from '@/app/design/variants';

export default function ContactPage() {
  const { variant } = useDesign();
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const cardBase = getCardClasses(variant, isDark);
  const panelPrimary = getPanelClasses(variant, isDark, 'primary');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const mailtoLink = `mailto:p.turnbull@auckland.ac.nz?subject=${encodeURIComponent(
      formData.subject || 'Website Contact Form'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open mailto link
    window.location.href = mailtoLink;

    // Show success message
    setTimeout(() => {
      setSubmitSuccess(true);
      setIsSubmitting(false);
      
      // Reset form
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitSuccess(false);
      }, 3000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Compact Header */}
        <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Get in Touch
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            For collaboration opportunities, supervision enquiries, or professional engagements, please send a message below or use direct contact details.
          </p>
        </div>

        {/* Quick Contact Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <a
            href="mailto:p.turnbull@auckland.ac.nz"
            className={`${panelPrimary.className} ${panelPrimary.animationClass} p-4`}
            style={{
              ...panelPrimary.style,
              animationDelay: getAnimationDelay(0, variant),
            }}
          >
            <div className="flex items-center gap-3 text-gray-800 dark:text-gray-100">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium">Email</span>
            </div>
            <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">p.turnbull@auckland.ac.nz</p>
          </a>

          <div
            className={`${panelPrimary.className} ${panelPrimary.animationClass} p-4`}
            style={{
              ...panelPrimary.style,
              animationDelay: getAnimationDelay(1, variant),
            }}
          >
            <div className="flex items-center gap-3 text-gray-800 dark:text-gray-100">
              <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium">Phone</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">+64 9 373 7599 Ext. 82352</p>
          </div>

          <div
            className={`${panelPrimary.className} ${panelPrimary.animationClass} p-4`}
            style={{
              ...panelPrimary.style,
              animationDelay: getAnimationDelay(2, variant),
            }}
          >
            <div className="flex items-center gap-3 text-gray-800 dark:text-gray-100">
              <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium">Location</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Auckland, New Zealand</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div
              className={`${cardBase.className} ${cardBase.animationClass}`}
              style={{
                ...cardBase.style,
                animationDelay: getAnimationDelay(1, variant),
              }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-start justify-center pt-2">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                    <a 
                      href="mailto:p.turnbull@auckland.ac.nz"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      p.turnbull@auckland.ac.nz
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-start justify-center pt-2">
                    <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Office Address</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      School of Optometry and Vision Science<br />
                      Faculty of Medical and Health Sciences<br />
                      University of Auckland<br />
                      85 Park Road, Grafton<br />
                      Auckland 1023, New Zealand
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-start justify-center pt-2">
                    <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                    <a 
                      href="tel:+6493737599"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      +64 9 373 7599 Ext. 82352
                    </a>
                  </div>
                </div>

                {/* Mailing Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-start justify-center pt-2">
                    <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Mailing Address</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Private Bag 92019<br />
                      Auckland 1142<br />
                      New Zealand
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden mt-8 border border-gray-200 dark:border-gray-600">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.4340587886594!2d174.76532831531485!3d-36.857631579934676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x4b1f6c1c6d0e8b8e!2s85%20Park%20Road%2C%20Grafton%2C%20Auckland%201023!5e0!3m2!1sen!2snz!4v1709280000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
            <div
              className={`${cardBase.className} ${cardBase.animationClass}`}
              style={{
                ...cardBase.style,
                animationDelay: getAnimationDelay(2, variant),
              }}
            >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h2>

            {submitSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your email client should open shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  * Required fields
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

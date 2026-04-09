'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, Copy, ExternalLink } from 'lucide-react';
import { useDesign } from '@/app/providers/DesignProvider';
import { useTheme } from '@/app/providers/ThemeProvider';
import { getCardClasses, getPanelClasses, getAnimationDelay } from '@/app/design/variants';

export default function ContactPage() {
  const { variant } = useDesign();
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Inquiry',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const cardBase = getCardClasses(variant, isDark);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('p.turnbull@auckland.ac.nz');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullSubject = `[${formData.category}] ${formData.subject || 'Website Inquiry'}`;
    const mailtoLink = `mailto:p.turnbull@auckland.ac.nz?subject=${encodeURIComponent(
      fullSubject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setSubmitSuccess(true);
      setIsSubmitting(false);
      
      setTimeout(() => {
        setFormData({ name: '', email: '', category: 'General Inquiry', subject: '', message: '' });
        setSubmitSuccess(false);
      }, 4000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800 text-center">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
    Get in Touch
  </h1>
  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
    I am available for research collaborations, postgraduate supervision (Masters/PhD), and professional advisory roles. For expert witness engagements or standards development inquiries, please use the form below.
  </p>
</div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Left Column: Contact Information */}
          <div className="space-y-3">
            <div
              className={`${cardBase.className} ${cardBase.animationClass}`}
              style={{ ...cardBase.style, animationDelay: getAnimationDelay(1, variant) }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-3">
                {/* Email with Copy Utility */}
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                    <div className="flex items-center gap-2">
                      <a href="mailto:p.turnbull@auckland.ac.nz" className="text-blue-600 dark:text-blue-400 hover:underline break-all">
                        p.turnbull@auckland.ac.nz
                      </a>
                      <button 
                        onClick={copyToClipboard}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                        title="Copy email address"
                      >
                        {copied ? <CheckCircle size={16} className="text-green-500" /> : <Copy size={16} className="text-gray-400" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                    <a href="tel:+6493737599,82352" className="text-blue-600 dark:text-blue-400 hover:underline">
                      +64 9 373 7599 ext 82352
                    </a>
                  </div>
                </div>
                
                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-green-600 dark:text-green-400 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Office Address</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Building 507, Level 3<br />
                      85 Park Road, Grafton<br />
                      Auckland 1023, New Zealand
                    </p>
                  </div>
                </div>

                {/* Mailing Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Mailing Address</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      School of Optometry and Vision Science<br />
                      The University of Auckland, Private Bag 92019<br />
                      Auckland 1142, New Zealand
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="relative w-full h-[250px] rounded-lg overflow-hidden mt-8 border border-gray-200 dark:border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.41733671501!2d174.7681532152914!3d-36.85885297993639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47e408f65581%3A0x6a00473a2416b777!2s85%20Park%20Rd%2C%20Grafton%2C%20Auckland%201023!5e0!3m2!1sen!2snz!4v1647414000000!5m2!1sen!2snz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="filter grayscale dark:invert-[0.9] dark:hue-rotate-180"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className={`${cardBase.className} ${cardBase.animationClass}`}
            style={{ ...cardBase.style, animationDelay: getAnimationDelay(2, variant) }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h2>

            {submitSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Prepared</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your default email client should now be open.<br />Please click 'Send' in your mail app to finish.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Inquiry Type</label>
                  <select id="category" name="category" value={formData.category} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  >
                    <option>Postgraduate Supervision</option>
                    <option>Research Collaboration</option>
                    <option>Expert Witness / Legal</option>
                    <option>Advisory Services</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject *</label>
                  <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <><Send size={18} /><span>Compose Email</span></>}
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-500 text-center italic">
                  Clicking "Compose" will open your local mail application to complete the send process.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
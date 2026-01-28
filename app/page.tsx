import Link from "next/link";
import Image from "next/image";
import { BookOpen, GraduationCap, Users, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Virtual Patient Banner */}
      <section 
        className="bg-blue-600 text-white py-3 relative bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(37, 99, 235, 0.85), rgba(29, 78, 216, 0.85)), url('/images/banner1.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="https://virtualpatient.co.nz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <span className="text-lg">Looking for the Virtual Patient?</span>
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <Image 
                src="/images/profile-photo.jpg" 
                alt="Associate Professor Philip Turnbull"
                width={200}
                height={200}
                className="rounded-full shadow-lg"
                priority
              />
            </div>
            <div className="flex-1">
              <p className="text-xl text-gray-600 mb-4">
                School of Optometry and Vision Science
              </p>
              <p className="text-lg text-gray-700 mb-6">
                University of Auckland, New Zealand
              </p>
              <p className="text-gray-700 mb-4">
                A/Prof Turnbull is a Board-registered optometrist specialising in 
                leveraging technology to improve healthcare education and clinical practice.
              </p>
              <p className="text-gray-700 mb-6">
                His research focuses on virtual patients, eye tracking, artificial intelligence, 
                and digital health innovation. He co-founded the Auckland Myopia Control Clinic 
                and has developed national standards for optometry practice in New Zealand.
              </p>
            </div>
          </div>
        </section>

        {/* Research, Teaching, Advisory Sections */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Link href="/research" className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all">
            <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Research</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Virtual Reality Applications</li>
              <li>• Eye Tracking Systems</li>
              <li>• Artificial Intelligence</li>
              <li>• Myopia Control Research</li>
            </ul>
          </Link>

          <Link href="/teaching" className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all">
            <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Teaching</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Undergraduate Optometry</li>
              <li>• Postgraduate Programs</li>
              <li>• Clinical Decision-Making</li>
              <li>• Virtual Patient Platform</li>
            </ul>
          </Link>

          <Link href="/advisory" className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Advisory</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• ODOB Advisor & Researcher</li>
              <li>• CAA Vision Standards</li>
              <li>• Expert Witness Services</li>
              <li>• Policy Development</li>
            </ul>
          </Link>
        </section>

        {/* Publications Link */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Publications</h2>
          <p className="text-gray-700 mb-6">
            Explore my research publications, including journal articles, conference papers, and collaborative works.
          </p>
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Publications
            <ExternalLink className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}


import Link from "next/link";
import Image from "next/image";
import { BookOpen, GraduationCap, Users, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section with Virtual Patient Banner */}
      <section 
        className="bg-blue-600 dark:bg-blue-700 text-white py-3 relative bg-cover bg-center"
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
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                <a 
                  href="https://www.auckland.ac.nz/en/science/about-the-faculty/school-of-optometry-and-vision-science.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline"
                >
                  School of Optometry and Vision Science
                </a>
                <br/>
                <a 
                  href="https://www.auckland.ac.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline"
                >
                  University of Auckland
                </a><br /> Auckland, New Zealand
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A/Prof Turnbull is a Board-registered optometrist specialising in 
                leveraging technology to improve healthcare education and clinical practice.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                His research focuses on virtual reality, eye tracking, artificial intelligence, 
                and digital health innovation. He co-founded the Auckland Myopia Control Clinic 
                and has developed national standards for optometry practice in New Zealand.
              </p>
            </div>
          </div>
        </section>

        {/* Research, Teaching, Advisory Sections */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Link href="/research" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-400 transition-all">
            <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Research</h3>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
              <li>• Virtual Reality Applications</li>
              <li>• Eye Tracking Systems</li>
              <li>• Artificial Intelligence</li>
              <li>• Myopia Control Research</li>
            </ul>
          </Link>

          <Link href="/teaching" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-400 transition-all">
            <GraduationCap className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Teaching</h3>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
              <li>• Undergraduate Optometry</li>
              <li>• Postgraduate Programs</li>
              <li>• Clinical Decision-Making</li>
              <li>• Virtual Patient Platform</li>
            </ul>
          </Link>

          <Link href="/advisory" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-400 transition-all">
            <Users className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Advisory</h3>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
              <li>• ODOB Advisor & Researcher</li>
              <li>• CAA Vision Standards</li>
              <li>• Expert Witness Services</li>
              <li>• Policy Development</li>
            </ul>
          </Link>
        </section>

        {/* Publications Link */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 border border-blue-100 dark:border-blue-800/50">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Publications</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Explore my research publications, including journal articles, conference papers, and collaborative works.
          </p>
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            View Publications
            <ExternalLink className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}


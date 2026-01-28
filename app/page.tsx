import Link from "next/link";
import { BookOpen, GraduationCap, Users, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Virtual Patient Banner */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-lg p-6 mb-6 hover:bg-blue-800 transition-colors">
            <Link href="https://virtualpatient.co.nz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">🏥 Virtual Patient</h2>
                <p className="text-blue-100">Explore our innovative virtual patient simulation platform</p>
              </div>
              <ExternalLink className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Associate Professor Philip Turnbull
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                School of Optometry and Vision Science
              </p>
              <p className="text-lg text-gray-700 mb-4">
                University of Auckland, New Zealand
              </p>
              <div className="prose prose-lg text-gray-600 mb-6">
                <p>
                  Associate Professor Philip Turnbull is a New Zealand Board-registered optometrist at the 
                  School of Optometry and Vision Science (SOVS), University of Auckland. His work focuses on 
                  leveraging technology to improve healthcare education and clinical practice, with expertise 
                  in virtual patients, clinical decision support systems, and digital health innovation.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="https://scholar.google.com/citations?user=x8jeZnwAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <GraduationCap className="w-5 h-5" />
                  Google Scholar
                </Link>
              </div>
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


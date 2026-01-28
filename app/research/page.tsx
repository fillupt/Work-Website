import Link from "next/link";
import { BookOpen, ExternalLink, GraduationCap } from "lucide-react";

export default function ResearchPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Research</h1>
          <p className="text-xl text-gray-600">
            Leveraging technology to advance vision research and clinical practice
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Focus</h2>
            
            <p className="text-gray-700 mb-6">
              A/Prof Turnbull's current research focuses on leveraging the latest technology to advance 
              vision research and clinical practice. His work primarily involves technology like virtual 
              reality, eye tracking, artificial intelligence, and advanced data science techniques for 
              complex data.
            </p>

            <p className="text-gray-700 mb-6">
              He collaborates with interdisciplinary teams across engineering, computer science, and health 
              sciences, aiming to develop tools that improve diagnostic accuracy and patient outcomes. He is 
              also involved with policy development, and has developed several national Board standards and 
              guidelines.
            </p>

            <p className="text-gray-700 mb-6">
              He is a frequent presenter at national and international conferences and has published in 
              peer-reviewed journals on topics ranging from myopia control to digital health innovation. 
              A/Prof Turnbull is passionate about mentoring emerging researchers and clinicians, and he 
              actively contributes to curriculum development, professional standards, and public health 
              initiatives in eye care.
            </p>
          </div>

          {/* Research Areas */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technology & Innovation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Virtual Reality Applications</li>
                <li>• Eye Tracking Systems</li>
                <li>• Artificial Intelligence</li>
                <li>• Advanced Data Science</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clinical Applications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Myopia Control Research</li>
                <li>• Diagnostic Accuracy Tools</li>
                <li>• Digital Health Innovation</li>
                <li>• Patient Outcome Improvement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Myopia Control Clinic */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg shadow-md border border-indigo-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Myopia Control Clinic</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              In 2010, alongside Dr John Phillips, A/Prof Turnbull co-founded the <strong>Myopia Control 
              Clinic</strong> as part of the Auckland Myopia Lab, where he served as the inaugural Director.
            </p>
            <p className="text-gray-700 mb-4">
              This translational research clinic was instrumental in promoting research-backed myopia 
              preventative treatments, influencing practices both nationally and internationally. These 
              methods are now tightly integrated into the undergraduate curriculum and widely adopted in 
              the optometric community.
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/publications"
            className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <BookOpen className="w-12 h-12 text-blue-600" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Publications</h3>
                <p className="text-gray-600">View research publications and papers</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 ml-auto" />
            </div>
          </Link>

          <a
            href="https://scholar.google.com/citations?user=x8jeZnwAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <GraduationCap className="w-12 h-12 text-blue-600" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Google Scholar</h3>
                <p className="text-gray-600">View full academic profile</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 ml-auto" />
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}

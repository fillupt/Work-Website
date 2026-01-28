import { GraduationCap, Users, BookOpen, Lightbulb } from "lucide-react";

export default function TeachingPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Teaching</h1>
          <p className="text-xl text-gray-600">
            Undergraduate and postgraduate education in optometry
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Teaching Philosophy</h2>
            
            <p className="text-gray-700 mb-6">
              At the University of Auckland, A/Prof Turnbull teaches both undergraduate and postgraduate 
              courses in optometry, with a focus on clinical decision-making, visual optics, and 
              professional practice.
            </p>

            <p className="text-gray-700 mb-6">
              He is passionate about mentoring emerging researchers and clinicians, and actively contributes 
              to curriculum development, professional standards, and public health initiatives in eye care.
            </p>
          </div>

          {/* Virtual Patient Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-blue-600" />
              Virtual Patient Innovation
            </h3>
            <p className="text-gray-700 mb-4">
              A/Prof Turnbull developed the innovative <strong>"Virtual Patient"</strong> platform in 2010, 
              a groundbreaking educational tool that has transformed clinical training in optometry. This 
              technology enables students to practice clinical decision-making in realistic, risk-free 
              scenarios.
            </p>
            <p className="text-gray-700">
              The Virtual Patient system has been integrated into the undergraduate curriculum and is widely 
              used for teaching clinical reasoning, diagnostic skills, and patient management.
            </p>
          </div>
        </div>

        {/* Teaching Areas */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Undergraduate Teaching</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Clinical Decision-Making</li>
              <li>• Visual Optics</li>
              <li>• Professional Practice</li>
              <li>• Diagnostic Techniques</li>
              <li>• Myopia Control Methods</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Postgraduate Teaching</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Advanced Clinical Practice</li>
              <li>• Research Methodology</li>
              <li>• Evidence-Based Practice</li>
              <li>• Technology in Healthcare</li>
              <li>• Professional Standards</li>
            </ul>
          </div>
        </div>

        {/* Curriculum Development */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
          <div className="flex items-start gap-4">
            <BookOpen className="w-12 h-12 text-blue-600 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Curriculum Development</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  A/Prof Turnbull actively contributes to curriculum development, ensuring that students 
                  receive training in the latest technologies and evidence-based practices. His work on 
                  integrating myopia control methods into the undergraduate curriculum has influenced 
                  optometric education both nationally and internationally.
                </p>
                <p className="text-gray-700">
                  He also supervises postgraduate students in research projects spanning digital health, 
                  virtual reality applications, and clinical innovation, fostering the next generation of 
                  researchers and clinicians in optometry and vision science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

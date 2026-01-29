import { Briefcase, Scale, ShieldCheck, FileCheck, Eye } from "lucide-react";

export default function AdvisoryPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Advisory & Consulting</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Expert advisory services in optometry, vision science, and regulatory standards
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A/Prof Turnbull is a New Zealand Board-registered optometrist who provides specialist advisory 
              and consulting services to government agencies, professional bodies, and legal proceedings. His 
              expertise spans clinical optometry, vision standards development, and expert witness testimony.
            </p>
          </div>
        </div>

        {/* Advisory Roles */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <ShieldCheck className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Regulatory Advisory</h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Optometrists and Dispensing Opticians Board</strong><br />
                Serves as an Advisor and Researcher, contributing to professional standards and regulatory 
                frameworks for optometric practice in New Zealand.
              </p>
              <p>
                A/Prof Turnbull has developed several national Board standards and guidelines that shape 
                professional practice and ensure public safety.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <Eye className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Civil Aviation Authority</h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                Acts as an optometric advisor to the <strong>Civil Aviation Authority (CAA)</strong> and 
                other agencies, contributing to the development of vision standards and safety protocols.
              </p>
              <p>
                His expertise helps ensure that vision requirements for aviation and other safety-critical 
                industries are evidence-based and practical.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <Scale className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Expert Witness</h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                Provides expert witness testimony in criminal proceedings, offering professional opinions 
                on matters related to vision, optical devices, and optometric practice.
              </p>
              <p>
                His technical expertise and clear communication make him a trusted expert in legal contexts 
                requiring optometric knowledge.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <FileCheck className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Policy Development</h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                Actively involved in policy development for professional standards, public health 
                initiatives, and healthcare technology implementation in eye care.
              </p>
              <p>
                Collaborates with interdisciplinary teams to develop evidence-based guidelines and 
                standards for the optometry profession.
              </p>
            </div>
          </div>
        </div>

        {/* Services Offered */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg shadow-md border border-blue-200 dark:border-indigo-800/50 p-8">
          <div className="flex items-start gap-4">
            <Briefcase className="w-12 h-12 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Consulting Services</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A/Prof Turnbull is available for consulting on:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Professional standards and regulatory compliance</li>
                <li>• Vision standards for safety-critical industries</li>
                <li>• Expert witness testimony in legal proceedings</li>
                <li>• Healthcare technology implementation and evaluation</li>
                <li>• Clinical practice guidelines and protocols</li>
                <li>• Myopia control program development</li>
                <li>• Digital health innovation in eye care</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 bg-blue-50 dark:bg-gray-900 rounded-lg shadow-md border border-blue-200 dark:border-gray-700 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Interested in Consulting Services?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            For inquiries about advisory or expert witness services, please get in touch.
          </p>
          <a
            href="mailto:p.turnbull@auckland.ac.nz"
            className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium"
          >
            Contact Phil
          </a>
        </div>
      </div>
    </main>
  );
}

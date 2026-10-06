import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms for apps and integrations operated by Philip Turnbull.',
  alternates: {
    canonical: '/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-4 text-4xl font-bold">Terms of Service</h1>
      <p className="mb-10 text-gray-600 dark:text-gray-400">
        Effective 6 October 2026
      </p>

      <div className="space-y-8 leading-7 text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Using the services</h2>
          <p>
            These terms apply to apps and integrations operated by Philip Turnbull that link
            to them. By using a service, you agree to these terms and its accompanying
            Privacy Policy. Use the service only with accounts and data you are authorized to
            access, and only for lawful purposes. You are responsible for reviewing the
            permissions requested and choosing whether to grant them.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Third-party services</h2>
          <p>
            Some features rely on services such as Google or Garmin. Their services are
            governed by their own terms and privacy policies, and may change or become
            unavailable independently of these apps. A sync feature sends the information
            needed for the operation you request to the destination you select. These apps
            are not affiliated with or endorsed by Google or Garmin.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Health and fitness information</h2>
          <p>
            Any health, activity, or fitness information provided through an app is for
            informational purposes only. It is not medical advice, diagnosis, or treatment,
            and must not be relied on to make medical decisions. Consult a qualified health
            professional about health concerns.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Availability and changes</h2>
          <p>
            Services are provided as available, without a guarantee that they will be
            uninterrupted, error-free, or suitable for every purpose. Features or these terms
            may change, or a service may be discontinued. Nothing in these terms limits rights
            that cannot be excluded under applicable law.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Contact</h2>
          <p>
            Questions about these terms can be sent to{' '}
            <a className="text-blue-700 underline dark:text-blue-300" href="mailto:p.turnbull@auckland.ac.nz">
              p.turnbull@auckland.ac.nz
            </a>.
          </p>
        </section>
      </div>
    </article>
  );
}

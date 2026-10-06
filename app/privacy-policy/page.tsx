import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy information for apps and integrations operated by Philip Turnbull.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
      <p className="mb-10 text-gray-600 dark:text-gray-400">
        Effective 6 October 2026
      </p>

      <div className="space-y-8 leading-7 text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Scope</h2>
          <p>
            This policy applies to apps and integrations operated by Philip Turnbull that link
            to it, including services that use Google sign-in or connect Google services with
            another service, such as Garmin. Each app only requests the permissions shown to
            you when you authorize it.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Information and use</h2>
          <p>
            When you authorize an app, it may access the account information or data covered by
            the permissions you approve. Google handles your sign-in; the app does not receive
            your Google password. Authorized data is used only to provide the feature you
            requested, such as retrieving information or syncing it to a destination you select.
            It is not used for advertising, sold, or used for an unrelated purpose.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Storage and sharing</h2>
          <p>
            I do not store retrieved user data locally in a database or file. Data may be
            processed temporarily as needed to complete your request. I do not sell your data
            or share it for another party&apos;s independent use. When you request a sync or
            other integration, the relevant data is transmitted to Google or the destination
            service you selected (for example, Garmin) only as needed to provide that feature.
            Those services handle data under their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Your choices</h2>
          <p>
            You can stop using an app at any time and revoke its Google account access in your
            Google Account security settings. You can also disconnect an integration through
            the relevant destination service. Since I do not keep a local copy of retrieved
            data, there is no locally stored copy for me to delete.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Changes and contact</h2>
          <p>
            This policy may be updated when an app or its practices change. Questions about
            this policy can be sent to{' '}
            <a className="text-blue-700 underline dark:text-blue-300" href="mailto:p.turnbull@auckland.ac.nz">
              p.turnbull@auckland.ac.nz
            </a>.
          </p>
        </section>
      </div>
    </article>
  );
}

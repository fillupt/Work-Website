import type { Metadata } from 'next';
import { buildAssetUrl } from '../lib/site';

export const metadata: Metadata = {
  title: 'Phil\'s Weight Syncer',
  description: 'Information about Phil\'s Weight Syncer, a Python application operated by Philip Turnbull.',
  alternates: {
    canonical: '/phils-weight-syncer',
  },
};

export default function PhilsWeightSyncerPage() {
  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-4 text-4xl font-bold">Phil&apos;s Weight Syncer</h1>

      <div className="space-y-8 leading-7 text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">About the application</h2>
          <p>
            Phil&apos;s Weight Syncer is a Python application operated by Philip Turnbull. It
            retrieves weight, body mass index (BMI), and body fat information from your Fitbit
            account using the Fitbit API and syncs those measurements to your Garmin Connect
            account. Its purpose is to keep these health and fitness measurements available in
            Garmin Connect without requiring you to enter them again.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Data and how it is used</h2>
          <p>
            The application accesses only the weight, BMI, and body fat measurements needed for
            the sync. It transfers those measurements to Garmin Connect to provide the feature
            you request; it does not use them for advertising or sell them. For details about
            data handling and your choices, see the{' '}
            <a className="text-blue-700 underline dark:text-blue-300" href={buildAssetUrl('/privacy-policy/')}>
              Privacy Policy
            </a>.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Operator and contact</h2>
          <p>
            The application is an independent project operated by Philip Turnbull. It is not
            affiliated with or endorsed by Fitbit, Google, or Garmin. For questions, contact{' '}
            <a className="text-blue-700 underline dark:text-blue-300" href="mailto:p.turnbull@auckland.ac.nz">
              p.turnbull@auckland.ac.nz
            </a>.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">Terms and health information</h2>
          <p>
            Use of the application is subject to the{' '}
            <a className="text-blue-700 underline dark:text-blue-300" href={buildAssetUrl('/terms-of-service/')}>
              Terms of Service
            </a>. Synced measurements are for informational purposes only and are not medical
            advice, diagnosis, or treatment.
          </p>
        </section>
      </div>
    </article>
  );
}

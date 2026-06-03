import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Associate Professor Philip Turnbull - Optometry and Vision Science';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 64px',
          background:
            'radial-gradient(circle at 20% 20%, #22d3ee 0%, #0f172a 42%, #020617 100%)',
          color: '#f8fafc',
          fontFamily: 'Outfit, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#22d3ee',
              boxShadow: '0 0 24px rgba(34, 211, 238, 0.8)',
            }}
          />
          <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: 0.2 }}>
            University of Auckland
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 980 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, fontWeight: 800 }}>
            Associate Professor
            <br />
            Philip Turnbull
          </div>
          <div style={{ fontSize: 32, lineHeight: 1.25, color: '#bae6fd', fontWeight: 500 }}>
            Optometry and Vision Science
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 24, color: '#e2e8f0' }}>virtual patients, eye tracking, digital health</div>
          <div style={{ fontSize: 24, color: '#67e8f9', fontWeight: 700 }}>philipturnbull.nz</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Associate Professor Philip Turnbull - Optometry and Vision Science';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function TwitterImage() {
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
            'linear-gradient(135deg, #082f49 0%, #0f172a 55%, #020617 100%)',
          color: '#f8fafc',
          fontFamily: 'Outfit, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif',
        }}
      >
        <div style={{ fontSize: 24, color: '#a5f3fc', fontWeight: 600 }}>
          University of Auckland
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 980 }}>
          <div style={{ fontSize: 62, lineHeight: 1.08, fontWeight: 800 }}>
            Associate Professor Philip Turnbull
          </div>
          <div style={{ fontSize: 32, lineHeight: 1.25, color: '#bae6fd', fontWeight: 500 }}>
            Optometry and Vision Science
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 24, color: '#e2e8f0' }}>Research, teaching, and advisory work</div>
          <div style={{ fontSize: 24, color: '#67e8f9', fontWeight: 700 }}>philipturnbull.nz</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

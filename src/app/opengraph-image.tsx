import { ImageResponse } from 'next/og';
import { company } from '../content/company';

export const runtime = 'edge';

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
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background:
            'radial-gradient(1200px circle at 20% 20%, rgba(16,185,129,0.20), transparent 60%), radial-gradient(900px circle at 85% 40%, rgba(56,189,248,0.14), transparent 55%), linear-gradient(120deg, #020617, #0b1222)',
          color: '#F8FAFC',
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: 22,
              letterSpacing: 0.4,
              color: 'rgba(226,232,240,0.95)',
            }}
          >
            <div
              style={{
                height: 44,
                width: 44,
                borderRadius: 12,
                background: 'rgba(16,185,129,0.10)',
                border: '1px solid rgba(16,185,129,0.50)',
              }}
            />
            <span style={{ fontWeight: 700 }}>{company.name}</span>
            <span style={{ color: 'rgba(148,163,184,0.95)' }}>—</span>
            <span style={{ color: 'rgba(148,163,184,0.95)' }}>{company.branding.baseline}</span>
          </div>

          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Vérandas, verrières & menuiseries aluminium sur mesure.
          </div>

          <div
            style={{
              fontSize: 26,
              lineHeight: 1.4,
              color: 'rgba(203,213,225,0.95)',
              maxWidth: 980,
            }}
          >
            Paris & Île-de-France • Devis rapide • Pose soignée
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 20,
            color: 'rgba(148,163,184,0.95)',
          }}
        >
          <span>{company.contact.websiteUrl.replace(/\/$/, '')}</span>
          <span>{company.contact.phone.label}</span>
        </div>
      </div>
    ),
    size,
  );
}

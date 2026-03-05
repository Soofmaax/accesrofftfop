import { ImageResponse } from 'next/og';
import { company, services } from '../../../content/company';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

type PageProps = {
  params: {
    slug: string;
  };
};

export default function OpenGraphImage({ params }: PageProps) {
  const service = services.find((item) => item.slug === params.slug);

  const title = service ? service.name : `Produits | ${company.name}`;
  const subtitle = service
    ? service.shortDescription
    : 'Vérandas, verrières, toitures ouvrantes, stores, fenêtres et volets.';

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
              gap: '10px',
              fontSize: 22,
              color: 'rgba(226,232,240,0.95)',
            }}
          >
            <span style={{ fontWeight: 700 }}>{company.name}</span>
            <span style={{ color: 'rgba(148,163,184,0.95)' }}>•</span>
            <span style={{ color: 'rgba(148,163,184,0.95)' }}>Produit</span>
          </div>

          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: 26,
              lineHeight: 1.4,
              color: 'rgba(203,213,225,0.95)',
              maxWidth: 980,
            }}
          >
            {subtitle}
          </div>

          {service?.highlights?.length ? (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginTop: '8px',
                maxWidth: 980,
              }}
            >
              {service.highlights.slice(0, 3).map((item) => (
                <span
                  key={item}
                  style={{
                    padding: '8px 12px',
                    borderRadius: 999,
                    border: '1px solid rgba(51,65,85,0.9)',
                    background: 'rgba(15,23,42,0.55)',
                    color: 'rgba(226,232,240,0.95)',
                    fontSize: 18,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}
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
          <span>Paris & Île-de-France</span>
          <span>{company.contact.phone.label}</span>
        </div>
      </div>
    ),
    size,
  );
}

/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; " +
      "style-src 'self' 'unsafe-inline'; " +
      "img-src 'self' data: https://images.unsplash.com; " +
      "font-src 'self' data:; " +
      "connect-src 'self' https://*.supabase.co https://www.google-analytics.com https://www.googletagmanager.com; " +
      "frame-src https://www.googletagmanager.com; " +
      "base-uri 'self'; " +
      "form-action 'self';",
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value:
      'camera=(), microphone=(), geolocation=(), gyroscope=(), magnetometer=(), fullscreen=(self)',
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/solutions/:path*',
        destination: '/produits',
        permanent: true,
      },
      {
        source: '/prestations',
        destination: '/produits',
        permanent: true,
      },
      {
        source: '/securite-privee-paris',
        destination: '/',
        permanent: true,
      },
      {
        source: '/securite-privee-marseille',
        destination: '/',
        permanent: true,
      },
      {
        source: '/securite-privee-montpellier',
        destination: '/',
        permanent: true,
      },
      {
        source: '/securite-privee-nimes',
        destination: '/',
        permanent: true,
      },
      {
        source: '/gardiennage-chantiers-btp-paris',
        destination: '/produits',
        permanent: true,
      },
      {
        source: '/guides/:path*',
        destination: '/produits',
        permanent: true,
      },
      {
        source: '/references',
        destination: '/galerie',
        permanent: true,
      },
      {
        source: '/rejoindre-mab',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
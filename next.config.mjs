/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              style-src 'self' 'unsafe-inline' https:;
              img-src 'self' data: https:;
              connect-src 'self' https:;
              font-src 'self' data: https:;
              frame-ancestors 'none';
              object-src 'none';
              base-uri 'self';
              form-action 'self';
            `.replace(/\n/g, ""), // Remove newlines for proper header formatting
          },
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevents clickjacking
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Prevents MIME-type sniffing
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Controls referrer info sent in requests
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload", // Enforces HTTPS
          }
        ],
      },
    ];
  },
};

export default nextConfig;

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
         {/* Security Headers as Meta Tags */}
        <meta http-equiv="Cache-Control" content="no-store, no-cache, must-revalidate, proxy-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        <meta http-equiv="X-Frame-Options" content="DENY" />
        <meta http-equiv="X-Content-Type-Options" content="nosniff" />
        <meta name="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta http-equiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
        <meta
          http-equiv="Content-Security-Policy"
          content="
            default-src 'self';
            script-src 'self' 'nonce-randomvalue';
            style-src 'self' 'unsafe-inline' https:;
            img-src 'self' data: https:;
            connect-src 'self' https:;
            font-src 'self' https:;
            frame-ancestors 'none';
            object-src 'none';
            base-uri 'self';
            form-action 'self';
          "
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

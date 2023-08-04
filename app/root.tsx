import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import type { MetaFunction } from '@fastly/remix-server-runtime';
import { env } from 'fastly:env';
import { json } from '@fastly/remix-server-runtime';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export async function loader() {
  return json({
    ENV: {
      HIGHLIGHT_PROJECT_ID: env('HIGHLIGHT_PROJECT_ID'),
    },
  });
}

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

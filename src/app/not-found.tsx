'use client';

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.
import Error from "next/error";

export default function NotFoundPage() {

  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
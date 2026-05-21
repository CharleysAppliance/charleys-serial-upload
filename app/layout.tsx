import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Charley's Serial Upload",
  description: 'Upload serial number photos for appliance deliveries',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif', background: '#f5f5f5' }}>
        {children}
      </body>
    </html>
  );
}

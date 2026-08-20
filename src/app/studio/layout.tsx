import { metadata, viewport } from 'next-sanity/studio';

export { metadata, viewport };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

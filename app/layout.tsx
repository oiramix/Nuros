import "../styles/globals.css";

export const metadata = { title: "nuros.ai", description: "Datasets + agents" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100">{children}</body>
    </html>
  );
}

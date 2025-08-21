import "./globals.css";
import Providers from "../components/Providers";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Keep Notes",
  description: "Notes app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Providers>
          <Navbar />
          <main className="container mx-auto py-6 px-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

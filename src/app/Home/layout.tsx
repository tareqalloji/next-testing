import type { Metadata } from "next";
import Footer from "./_components/Footer";
import NavbarComponent from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background font-sans antialiased">
      <div className="relative flex flex-col h-screen">
        <NavbarComponent />
        <main className="container mx-auto max-w-7xl pt-8 px-6 flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

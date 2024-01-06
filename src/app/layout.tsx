import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryProvider from "./QueryProvider";
import ContainerToast from "@/components/ContainerToast";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to our Shop!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContainerToast />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

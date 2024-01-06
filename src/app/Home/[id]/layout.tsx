import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

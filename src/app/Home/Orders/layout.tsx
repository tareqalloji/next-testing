import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My orders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

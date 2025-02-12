import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import QueryProvider from "./QueryProvider";
import { Toaster } from "@/components/ui/sonner"
import DashboardLayout from "@/components/Layout/DashboardLayout";

const manrope = Manrope({
  display: "swap",
  weight: [ "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Post App",
  description: "Task app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <body
          className={`${manrope.className} antialiased`}
        >
          <DashboardLayout>
            {children}
          </DashboardLayout>
          <Toaster />
        </body>
      </QueryProvider>
    </html>
  );
}

import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "./navbar/page";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Web Space",
  description: "Project Web Space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

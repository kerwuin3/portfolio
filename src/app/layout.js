import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.scss';
import Navbar from '../components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Portfolio Kerwuin',
  description: "Portfolio Website",  
};

/* El Layout es el componente que envuelve a todas las páginas, se puede usar para agregar elementos comunes como el navbar, footer, etc. */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}        
          <Navbar />        
      </body>
    </html>
  );
}

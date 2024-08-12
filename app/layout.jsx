import { Inter } from "next/font/google";
import "@styles/globals.css";
import {ClerkProvider} from '@clerk/nextjs';



const inter = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: "Rently",
  description: "Rently is a platform that is used to rent or host homes",
};
 
export default function RootLayout({ children }) {
  return (
    <ClerkProvider >
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

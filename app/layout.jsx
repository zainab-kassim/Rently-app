import { Poppins } from "next/font/google";
import "@styles/globals.css";
import {ClerkProvider} from '@clerk/nextjs';



const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});


export const metadata = {
  title: "Rently",
  description: "Rently is a platform that is used to rent or host homes",
};
 
export default function RootLayout({ children }) {
  return (
    <ClerkProvider >
      <html lang="en">
        <body className={poppins.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

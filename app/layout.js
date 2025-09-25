import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const Outfit = Outfit({
  
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const  Ovo = Outfit({
   subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Portfolio- Ashan",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Outfit.className} ${Ovo,className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

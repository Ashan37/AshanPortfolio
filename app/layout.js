import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Ashan",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getTheme() {
                  const theme = localStorage.getItem('theme');
                  if (theme) return theme;
                  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                const theme = getTheme();
                document.documentElement.classList.add('preload-transitions');
                document.documentElement.classList.toggle('dark', theme === 'dark');
                setTimeout(() => {
                  document.documentElement.classList.remove('preload-transitions');
                }, 0);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${outfit.className} antialiased leading-8 overflow-x-hidden bg-white dark:bg-darkTheme text-gray-900 dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

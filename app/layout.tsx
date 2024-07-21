import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import {cn} from "./lib/utilis";
import { ThemeProvider } from "next-themes";

const fontSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  weight:['200' , '300' , '400' , '500' , '600' , '600'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: "carePulse",
  description: "A healthcare mangement system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased' , fontSans.variable)} >
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: "Codeutsava X.0",
    template: "%s | Codeutsava X.0",
  },
  description:
    "Enter the Glitchverse at Codeutsava X.0 — a celebration of code, creativity, and ideas that break the expected.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{if(window.location.hash==="#top"){document.documentElement.dataset.heroReturn="true"}}catch(e){}',
          }}
        />
      </head>
      <body>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

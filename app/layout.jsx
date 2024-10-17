import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400", // Especifica el peso de la fuente aquí
});

export const metadata = {
  title: "Happy Birthday",
  description: "Happy Birthday",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="icon" href="/icons/icon-512x512.png" type="image/png" />
      </head>
      <body
        className="h-screen w-full  flex flex-col"
        style={{
          background: "linear-gradient(90deg, #C2D5F0 50%, #32D827 50%)",
        }}
      >
        {children}
      </body>
    </html>
  );
}

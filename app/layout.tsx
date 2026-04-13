import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Score Dashboard | Resumen de Resultados",
  description: "Componente de resumen de puntajes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

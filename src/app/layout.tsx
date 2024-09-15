import type { Metadata } from "next";
import { poppins } from "./fonts";
import { Providers } from './providers'


export const metadata: Metadata = {
  title: { 
    absolute: "",
    default: "Barber Schedule",
    template: "%s | Barber Schedule",
   },
  description: "A agenda on line da sua barbearia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
      <Providers>

          {children}
  
      </Providers>
      </body>
    </html>
  );
}

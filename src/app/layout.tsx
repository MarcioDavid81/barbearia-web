import type { Metadata } from "next";
import { poppins } from "./fonts";
import { Providers } from './providers'
import styles from "./styles.module.scss";


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
    <html lang="pt-br" className={styles.html}>
      <body className={poppins.className}>
      <Providers>

          {children}
  
      </Providers>
      </body>
    </html>
  );
}

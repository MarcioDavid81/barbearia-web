import { Poppins, Nunito } from "next/font/google";

export const poppins = Poppins({
    weight: ["100", "300", "500", "700", "900"],
    style: "normal",
    display: "swap",
    subsets: ["latin"],
  });

export const nunito = Nunito({
    weight: ["200", "400", "600", "800", "1000"],
    style: "normal",
    display: "swap",
    subsets: ["latin"],
  });

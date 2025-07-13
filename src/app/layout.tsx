import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import { Titillium_Web } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["600", "700"],
    variable: "--font-rajdhani",
});

const titillium = Titillium_Web({
    subsets: ["latin"],
    weight: ["400", "600"],
    variable: "--font-titillium",
});

export const metadata: Metadata = {
    title: "Site Work Services",
    description: "Especialistas em manutenção e acesso técnico",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <body
            className={`${rajdhani.variable} ${titillium.variable} antialiased bg-white`}
        >
        {children}
        </body>
        </html>
    );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nacelleRegular = localFont({
    src: "./assets/Nacelle-Regular.otf",
    variable: "--font-nacelle-regular",
});
const nacelleHeavy = localFont({
    src: "./assets/Nacelle-Heavy.otf",
    variable: "--font-nacelle-heavy",
});

export const metadata: Metadata = {
    title: "Juan Miguel Sanchez",
    description: "Juan Miguel Sanchez's Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className={`${nacelleRegular.variable} ${nacelleHeavy.variable}`}>
            <body className='antialiased flex flex-col'>
                <main className='font-nacelle-regular'>{children}</main>
            </body>
        </html>
    );
}

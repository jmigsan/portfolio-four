import type { Metadata } from "next";
import "./globals.css";

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
        <html lang='en'>
            <body className='antialiased flex flex-col'>
                <main className='font-nacelle-regular'>{children}</main>
            </body>
        </html>
    );
}

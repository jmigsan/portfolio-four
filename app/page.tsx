"use client";

import { useRef } from "react";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <main
            ref={containerRef}
            style={{
                width: "100vw",
                height: "100vh",
                overflowY: "auto",
                overflowX: "hidden",
                background: "#f0f0f0",
            }}
        >
            <embed
                src='/Juan Miguel Sanchez CV.pdf'
                type='application/pdf'
                width='100%'
                height='100%'
                style={{ minHeight: "100vh", display: "block" }}
            />

            <noscript>
                <p>
                    Your browser does not support embedded PDFs. Download the
                    PDF to view it:{" "}
                    <a href='/Juan Miguel Sanchez CV.pdf'>Download PDF</a>.
                </p>
            </noscript>
        </main>
    );
}

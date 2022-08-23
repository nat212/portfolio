import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <body className="bg-slate-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

import '../src/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '@components/layout';

function MyApp({ Component, pageProps }: AppProps) {
    const pageTitle: string | undefined = (Component as any).pageTitle;
    return (
        <Layout pageTitle={pageTitle}>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;

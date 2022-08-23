import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import cn from 'classnames';
import { NextRouter, withRouter } from 'next/router';
import Script from 'next/script';

interface LayoutProps {
    home?: boolean;
    children: ReactNode;
    pageTitle?: string;
    router: NextRouter;
}

interface Page {
    title: string;
    link: string;
}

class Layout extends React.Component<LayoutProps> {
    readonly pages: Page[] = [
        { title: 'About', link: '/' },
        { title: 'Experience', link: '/experience' },
        { title: 'Portfolio', link: '/portfolio' },
        { title: 'Contact', link: '/contact' },
    ];

    isPathActive(path: string) {
        return this.props.router.pathname === path;
    }

    render() {
        const { pageTitle, children } = this.props;
        return (
            <>
                <Head>
                    <title>{`Natasha Draper${pageTitle ? ` - ${pageTitle}` : ''}`}</title>
                    <meta name="description" content="Natasha Draper portfolio" />
                    <meta
                        name="og:image"
                        content={`https://og-image.natashadraper.co.za/**Natasha%20Draper**.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fnatashadraper.co.za%2Ffavicon.png&widths=300&heights=300`}
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Script src="https://kit.fontawesome.com/9f28703bec.js" crossOrigin="anonymous" async></Script>
                <div className="px-2 h-full font-sans">
                    <header className="px-8 py-6">
                        <nav className="">
                            <ul className="flex flex-col md:flex-row md:gap-4 md:justify-center text-center">
                                {this.pages.map(({ title, link }) => (
                                    <Link href={link} key={link}>
                                        <li
                                            className={cn({
                                                active: this.isPathActive(link),
                                                'nav-link': true,
                                            })}
                                        >
                                            {title}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </nav>
                    </header>
                    <main className="flex-1 flex flex-col justify-start items-center pt-4 md:pt-8">{children}</main>
                </div>
            </>
        );
    }
}

export default withRouter(Layout);

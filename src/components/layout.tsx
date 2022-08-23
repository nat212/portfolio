import styles from '../styles/Layout.module.scss';
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import cn from 'classnames';
import { NextRouter, withRouter } from 'next/router';

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
        { title: 'Home', link: '/' },
        { title: 'About', link: '/about' },
        { title: 'Contact', link: '/contact' },
        { title: 'Experience', link: '/experience' },
        { title: 'Portfolio', link: '/portfolio' },
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
                    <meta name='description' content='Natasha Draper portfolio' />
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <div className={`${styles.container} font-sans`}>
                    <header className={styles.header}>
                        <nav className={styles.navbar}>
                            <ul className={styles.navbar__list}>
                                {this.pages.map(({ title, link }) => (
                                    <Link href={link} key={link}>
                                        <li
                                            className={cn({
                                                'bg-pink-600': this.isPathActive(link),
                                            })}
                                        >
                                            {title}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </nav>
                    </header>
                    <main className={styles.main}>{children}</main>
                </div>
            </>
        );
    }
}

export default withRouter(Layout);

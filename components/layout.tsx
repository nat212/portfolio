import styles from '@styles/Layout.module.scss';
import { ReactNode } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Link from 'next/link';
import cn from 'classnames';

interface LayoutProps {
    home?: boolean;
    children: ReactNode;
    pageTitle?: string;
    activePage: string;
}

interface Page {
    title: string;
    link: string;
}

const pages: Page[] = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Contact', link: '/contact' },
    { title: 'Experience', link: '/experience' },
    { title: 'Portfolio', link: '/portfolio' },
];

const Layout: NextPage<LayoutProps> = ({ children, pageTitle, activePage }) => {
    return (
        <>
            <Head>
                <title>{`Natasha Draper${pageTitle ? ` - ${pageTitle}` : ''}`}</title>
                <meta name='description' content='Natasha Draper portfolio' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <div className={`${styles.container} font-sans`}>
                <header className={styles.header}>
                    <nav className={styles.navbar}>
                        <ul className={styles.navbar__list}>
                            {pages.map(({ title, link }) => (
                                <li
                                    key={link}
                                    className={cn({
                                        'bg-pink-600': link === activePage,
                                    })}
                                >
                                    <Link href={link}>{title}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
                <main className={styles.main}>{children}</main>
            </div>
        </>
    );
};

export default Layout;

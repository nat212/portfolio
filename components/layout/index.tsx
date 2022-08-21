import styles from './layout.module.scss';
import { ReactNode } from 'react';

interface LayoutProps {
    home?: boolean;
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>{children}</main>
        </div>
    );
}

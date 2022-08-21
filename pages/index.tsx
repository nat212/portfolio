import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import profilePic from '../public/image/profile.jpeg';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Natasha Draper</title>
                <meta name='description' content='Natasha Draper portfolio site' />
                <link rel='icon' href='/favicon.png' />
            </Head>

            <main className={styles.main}>
                <div className={styles.avatar}>
                    <Image src={profilePic} alt='Natasha Draper' width={200} height={200} placeholder='blur'></Image>
                </div>
                <h1 className={styles.title}>Natasha Draper</h1>
                <h2 className={styles.subtitle}>Frontend Developer</h2>
            </main>
        </div>
    );
};

export default Home;

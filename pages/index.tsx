import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '@styles/Home.module.scss';
import profilePic from '@public/image/profile.jpeg';
import Layout from '@components/layout';

const Home: NextPage = () => {
    return (
        <Layout activePage='/'>
            <div className={styles.avatar}>
                <Image src={profilePic} alt='Natasha Draper' width={200} height={200} placeholder='blur'></Image>
            </div>
            <h1 className='text-6xl'>Natasha Draper</h1>
            <h2 className='text-4xl text-gray-500'>Frontend Developer</h2>
        </Layout>
    );
};

export default Home;

import Image from 'next/image';
import styles from '../src/styles/Home.module.scss';
import profilePic from '@public/image/profile.jpeg';
import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <>
                <div className={styles.avatar}>
                    <Image src={profilePic} alt='Natasha Draper' width={200} height={200} placeholder='blur'></Image>
                </div>
                <h1 className={`text-4xl md:text-6xl ${styles.title}`}>Natasha Draper</h1>
                <h2 className={`text-2xl md:text-4xl text-gray-500 ${styles.subtitle}`}>Frontend Developer</h2>
            </>
        );
    }
}

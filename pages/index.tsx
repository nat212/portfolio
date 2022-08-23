import Image from 'next/image';
import profilePic from '@public/image/profile.jpeg';
import React from 'react';

interface Social {
    href: string;
    icon: string;
    title: string;
}

export default class Home extends React.Component {
    socials: Social[] = [
        {
            href: 'https://github.com/nat212',
            icon: 'fa-brands fa-github',
            title: 'GitHub',
        },
        {
            href: 'https://www.linkedin.com/in/natasha-draper/',
            icon: 'fa-brands fa-linkedin',
            title: 'LinkedIn',
        },
        {
            href: 'https://stackoverflow.com/users/16027281/natash',
            icon: 'fa-brands fa-stack-overflow',
            title: 'Stack Overflow',
        },
    ];

    static get pageTitle(): string {
        return 'About';
    }

    render() {
        return (
            <>
                <div className="flex flex-row gap-6 items-start md:w-1/2 justify-start mb-4 px-5">
                    <div className="rounded-full overflow-hidden border-2 border-white flex w-20 md:w-auto shadow-2xl">
                        <Image
                            src={profilePic}
                            alt="Natasha Draper"
                            width={120}
                            height={120}
                            placeholder="blur"
                        ></Image>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-3xl md:text-5xl">Natasha Draper</h1>
                        <h2 className="text-xl md:text-3xl text-gray-500">Frontend Developer</h2>
                        <div className="flex flex-row mt-2 gap-x-3 flex-wrap">
                            {this.socials.map((social) => (
                                <a
                                    key={social.href}
                                    href={social.href}
                                    className="app-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className={social.icon}></i>&nbsp;{social.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-md font-light w-full md:w-1/2 p-4">
                    I am a frontend developer with over 5 years experience in the Software Development industry. I
                    currently specialise in Angular, but have experience with React, Next.js, Knockout.js, and Vue. I
                    have two adorable cats, and I am a huge fan of craft gin! I dabble in graphic design, and have
                    picked up a few skills, mostly relating to UI/UX design.
                </p>
            </>
        );
    }
}

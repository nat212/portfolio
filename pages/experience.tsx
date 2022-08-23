import React from 'react';
import { GetStaticProps } from 'next';
import { getAllExperience, getAllFrameworks, getAllLanguages, getAllSoftware, WorkExperience } from '@lib/experience';

interface ExperienceProps {
    languages: string[];
    frameworks: string[];
    software: string[];
    workExperience: WorkExperience[];
}

interface SkillSectionProps {
    values: string[];
    title: string;
}

class SkillSection extends React.Component<SkillSectionProps> {
    render() {
        return (
            <div>
                <h3 className="text-2xl mb-2">{this.props.title}</h3>
                <ul className="flex flex-row flex-wrap gap-2">
                    {this.props.values.map((value) => (
                        <li key={value} className="p-2 bg-teal-800 rounded-lg">
                            {value}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default class Experience extends React.Component<ExperienceProps> {
    static get pageTitle(): string {
        return 'Experience';
    }

    get skills(): { title: string; values: string[] }[] {
        return [
            { title: 'Languages', values: this.props.languages },
            { title: 'Frameworks', values: this.props.frameworks },
            { title: 'Software', values: this.props.software },
        ];
    }

    render() {
        return (
            <>
                <h2 className="text-4xl text-center mb-10">Skills</h2>
                <div className="flex flex-col md:flex-row gap-10 px-5 md:w-2/3 md:justify-center">
                    <div className="md:w-1/3 flex flex-col gap-10">
                        <SkillSection values={this.props.languages} title="Languages" />
                        <SkillSection values={this.props.frameworks} title="Frameworks" />
                    </div>
                    <div className="md:w-1/3">
                        <SkillSection values={this.props.software} title="Software" />
                    </div>
                </div>
            </>
        );
    }
}

export const getStaticProps: GetStaticProps<ExperienceProps> = () => {
    return {
        props: {
            languages: getAllLanguages(),
            frameworks: getAllFrameworks(),
            software: getAllSoftware(),
            workExperience: getAllExperience(),
        },
    };
};

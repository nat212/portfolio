import experience from '@data/experience.json';

export interface WorkExperience {
    company: string;
    role: string;
    start: number;
    end?: number;
    description: string;
}

export function getAllExperience(): WorkExperience[] {
    return experience.work_experience;
}

export function getAllLanguages(): string[] {
    return experience.languages;
}

export function getAllFrameworks(): string[] {
    return experience.frameworks;
}

export function getAllSoftware(): string[] {
    return experience.software;
}

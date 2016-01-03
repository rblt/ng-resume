///<reference path="../_all.ts"/>

module cv {
    export interface IResumeResource {
        profile: IProfile;
        heroStack: IHeroStackLayer[];
        skills: ISkillCollection;
        experience: IExperience;
        education: IEducation;
        about: IAbout;
        hireButton: IHireButton;
        downloadCvLink: IDownloadCvLink;
        lastUpdated: Date;
        $dateFormat: IDateFormat;
    }

    export interface IProfile {
        name: string;
        age?: number;
        profession: string;
        birthDate: Date;
        address: IAddress;
        phone: string;
        email: string;
        linkedin: string;
        github: string;
        quote: string;
        quoteAuthor: string;
    }

    export interface IHeroStackLayer {
        css: string;
        items: IHeroStackItem[];
    }

    export interface IHeroStackItem {
        name: string;
        width?: number;
    }

    export interface IAddress {
        street: string;
        city: string;
        country: string;
    }

    export interface IExperience {
        title: string;
        projectsHeading: IProjectsHeading;
        workPlaces: IWorkPlace[];
    }

    export interface IWorkPlace {
        from: Date;
        to: Date;
        company: string;
        position: string;
        location: string;
        stories: string[];
        subStories: string[];
    }

    export interface IProjectsHeading {
        title: string;
        subtitle: string;
    }

    export interface ISkillCollection {
        title: string;
        mainSkills: IMainSkill[];
        misc: IMiscSkills;
        langSkills: ILangCollection;   
    }

    export interface IMainSkill {
        title: string;
        skills: string[];
        percent: number;
        barTitle: string;
        barCss: string;
    }

    export interface ILangCollection {
        title: string;
        langs: ILang[];
    }
    
    export interface ILang {
        name: string;
        level: string;
    }

    export interface IMiscSkills {
        subTitle: string;
        skillsBetterFirst: string[];
    }

    export interface IEducation {
        title: string;
        schools: ISchool[];
    }

    export interface ISchool {
        name: string;
        degree: string;
        from: Date;
        to: Date;
        location: string;
        story: string;
        storyTitle: string;
    }

    export interface IAbout {
        title: string;
        qualities: Object;
        story: string[];
        storyTitle: string;
    }
    
    export interface IHireButton {
        title: string;
        popoverText: string;
    }

    export interface IDownloadCvLink {
        title: string;
        href: string;
    }

    export interface IDateFormat {
        yearAndMonth: string;
        full: string;
    }
} 
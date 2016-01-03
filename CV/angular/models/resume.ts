///<reference path="../_all.ts"/>

module cv {
    'use strict';

    export class Resume implements IResumeResource {
        constructor(resource: IResumeResource, public lang: string) {
            this.profile = resource.profile;
            this.heroStack = resource.heroStack;
            this.skills = resource.skills;
            this.experience = resource.experience;
            this.education = resource.education;
            this.about = resource.about;
            this.hireButton = resource.hireButton;
            this.downloadCvLink = resource.downloadCvLink;
            this.lastUpdated = resource.lastUpdated;
            this.$dateFormat = resource.$dateFormat;

            if (this.profile.birthDate) {
                this.profile.age = this.getAge( new Date( Date.parse( <any>this.profile.birthDate ) ) );
            }
        }

        public profile: IProfile;
        public heroStack: IHeroStackLayer[];
        public skills: ISkillCollection;
        public experience: IExperience;
        public education: IEducation;
        public about: IAbout;
        public hireButton: IHireButton;
        public downloadCvLink: IDownloadCvLink;
        public lastUpdated: Date;
        public $dateFormat: IDateFormat;

        private getAge(bd: Date) : number {
            var diffMs = Date.now() - bd.getTime();
            var ageDate = new Date(diffMs);
            return (ageDate.getFullYear() - 1970);
        }
    }
}
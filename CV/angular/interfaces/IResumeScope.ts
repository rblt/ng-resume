/// <reference path='../_all.ts' />

module cv {
    export interface IResumeScope extends ng.IScope {
        vm: ResumeCtrl;
        resume: Resume;
        location: any;
        getFontClass: (index: number) => string;
        getOffsetClasses: (itemArray: any[], index: number) => string;
    }
} 
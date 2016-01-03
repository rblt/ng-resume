///<reference path="../_all.ts"/>

module cv {
    'use strict';

    interface Map {
        [key: string]: Resume;
    }

    export class ResumeCtrl {

        public static $inject = [
            '$scope',
            '$http',
            '$location'
        ];

        private static _fontClasses = ['font120', 'font110', 'font100', 'font90'];

        private _langs: Map = {};

        constructor(
            private $scope: IResumeScope,
            private $http: ng.IHttpService,
            private $location: ng.ILocationService
            ) {

            $scope.getFontClass = this.getFontClass;
            $scope.getOffsetClasses = this.getOffsetClasses;

            $scope.vm = this;

            if ($location.path() !== '/hu')
                $location.path('/');

            this.changeLang($location.path().substring(1));

            $scope.$watch('location.path()',(path: string) => this.changeLang(path.substring(1)));
            $scope.location = $location;
        }
        
        changeLang(lang: string) {
            if (lang !== 'hu') lang = 'en';

            if (this._langs[lang] !== undefined) {
                this.$scope.resume = this._langs[lang];
                return;
            }

            var onSuccess = (res) => this.loadResume(res,lang);
            this.$http.get('resume.' + lang + '.json')
                .success(onSuccess);
        }

        loadResume(res : IResumeResource, lang:string) {
            this._langs[lang] = new Resume(res, lang);
            this.$scope.resume = this._langs[lang];
        }

        getFontClass = (index: number): string => {
            var i = Math.round((ResumeCtrl._fontClasses.length - 1) * (index / (this.$scope.resume.skills.misc.skillsBetterFirst.length - 1)));
            return ResumeCtrl._fontClasses[i];
        } 

        getOffsetClasses = (itemArray: any[], index: number): string => {
            var offset = Math.round((10 - itemArray.length) / 2);
            var colLgOffset = Math.min(offset + index, 9);
            var colSmOffset = Math.min(offset + index, 6);
            return 'col-lg-offset-' + colLgOffset + ' col-sm-offset-' + colSmOffset;
        } 

        getOffset = (itemArray: any[], index: number): string => {
            var offset = Math.floor((10 - itemArray.length) / 2);
            return String(offset + index);
        } 
    }
}

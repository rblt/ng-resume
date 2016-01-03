///<reference path="_all.ts"/>

module cv {
    'use strict';

    function yearFilter(dateFilter) {
        return function (input: string, format: string, nullDateStr: string): string {
            if (!input)
                return nullDateStr;
            return dateFilter(input, format);
        }
    }

    function escapeFilter() {
        return function (input: string): string {
            if (typeof input == 'string')
                return input.replace('\n', '<br/>')
                    .replace(/\*{2}(.*?)\*{2}/g, '<b>$1</b>')
                    .replace(/\*(.*?)\*/g, '<i>$1</i>')
            return input;
        }
    }

    var app = angular.module('ngresume', ['ngSanitize'])
        .filter('year', yearFilter)
        .filter('esc', escapeFilter)
        .controller('resumeCtrl', ResumeCtrl).run(() => {
            $('[data-toggle="popover"]').popover();
        });
} 
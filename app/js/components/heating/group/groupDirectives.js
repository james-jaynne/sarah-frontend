(function() {
    /**
     * Creates a glyphicon tick box or cross depending on the value
     * @returns {{scope: {value: string}, template: string}}
     */
    function tickBox() {
        return {
            scope: {
                value: '=value'
            },
            template: '<span ng-class="{\'glyphicon-ok\': value, \'glyphicon-remove\': !value}" class="glyphicon" aria-hidden="true"></span>'
        };
    }

    /**
     * An hour and minute editor which converts the value to the minute of the day
     * @returns {{scope: {minutes: string}, link: Function, templateUrl: string}}
     */
    function timeEditor() {
        return {
            scope: {
                minutes: '=minutes'
            },
            link: function(scope) {
                scope.hour = parseInt(scope.minutes / 60);
                scope.minute = scope.minutes % 60;
                scope.timeChanged = function() {
                    if (!angular.isNumber(scope.hour)) scope.hour = 0;
                    if (scope.hour < 0) scope.hour = 0;
                    if (scope.hour > 23) scope.hour = 23;
                    if (!angular.isNumber(scope.minute)) scope.minute = 0;
                    if (scope.minute < 0) scope.minute = 0;
                    if (scope.minute > 59) scope.minute = 59;

                    scope.minutes = (scope.hour * 60) + scope.minute;
                }
            },
            templateUrl: '/js/components/heating/group/timeEditor.tpl.html'
        };
    }
    angular.module('sarahApp.heating.group').
        directive('srTickBox', tickBox).
        directive('srTimeEditor', timeEditor);
})();
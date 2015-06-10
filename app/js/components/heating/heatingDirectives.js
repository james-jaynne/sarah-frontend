(function() {
    /**
     * Creates a glyphicon tick box or cross depending on the value
     * @returns {{scope: {value: string}, template: string}}
     */
    function checkBox() {
        return {
            scope: {
                value: '=value'
            },
            template: '<span ng-class="{\'glyphicon-check text-success\': value, \'glyphicon-unchecked text-danger\': !value}" class="glyphicon" aria-hidden="true"></span>'
        };
    }

    angular.module('sarahApp.heating').
        directive('srCheckBox', checkBox);
})();
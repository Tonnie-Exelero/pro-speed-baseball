import angular from 'angular';

// Create the module where our functionality can attach to
let unlimitedHomeModule = angular.module('app.unlimited_home', []);

// Include our UI-Router config settings
import UnlimitedHomeConfig from './home.config';
unlimitedHomeModule.config(UnlimitedHomeConfig);


// Controllers
import UnlimitedHomeCtrl from './home.controller';
unlimitedHomeModule.controller('UnlimitedHomeCtrl', UnlimitedHomeCtrl);

// Directives
unlimitedHomeModule.directive("filesInput", function() {
    return {
        require: "ngModel",
        link: function postLink(scope,elem,attrs,ngModel) {
            elem.on("change", function(e) {
                var files = elem[0].files;
                ngModel.$setViewValue(files);
            })
        }
    }
});

unlimitedHomeModule.directive('onFileChange', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var onChangeHandler = scope.$eval(attrs.onFileChange);

            element.bind('change', function() {
                scope.$apply(function() {
                    var files = element[0].files;
                    if (files) {
                        onChangeHandler(files);
                    }
                });
            });

        }
    };
});

export default unlimitedHomeModule;

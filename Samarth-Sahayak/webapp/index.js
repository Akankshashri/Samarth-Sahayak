angular.module('samarth-sahayak', ['ui.router', 'ngMaterial']);
angular.module('samarth-sahayak')
    .config(function($stateProvider) {

        $stateProvider
            .state('circles', {
                url: '/circles',
                template: '<my-circle></my-circle>',

            })
            .state('circleDetail', {
                url: '/circleDetails',
                templateUrl: 'webcomponents/circle/templates/circleDetails.html'

            })

    });

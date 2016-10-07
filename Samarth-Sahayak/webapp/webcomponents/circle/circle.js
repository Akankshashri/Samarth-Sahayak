angular.module('samarth-sahayak')
    .component('myCircle', {            
        templateUrl: 'webcomponents/circle/templates/circles.html',
        controller: circleCrtl
    });

function circleCrtl($http, $log, circlesGetService) {
    console.log("enter in controller");
    var ctrl = this;
    circlesGetService.getCircle().then(function(response) {
        ctrl.profiling = response.data;
        console.log(ctrl.profiling);
    });


}

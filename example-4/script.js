console.clear();

/* Модуль */
var phonecatApp = angular.module('phonecatApp', []);



/* Контроллер  */
phonecatApp.controller('PhoneListCtrl', function ($scope) {
    $scope.phones = [
        {'name': 'Nexus S', 'snippet': 'fast, but ...........'},
        {'name': 'Motorola', 'snippet': 'midlle, but ...........'},
        {'name': 'Nokia', 'snippet': 'slowly, but ...........'}
    ]
});



/* Service */


/* Контроллер  */



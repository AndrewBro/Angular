console.clear();

/* Модель */
/* у модели есть два свойство user, courses */
var model = {
    user: 'Nick',
    courses: [{ name: 'HTML, CSS', passed: true },
        { name: 'JS', passed: true },
        { name: 'Angular', passed: true },
        { name: 'React', passed: true },
        { name: 'C#', passed: false }]
};

/* Модуль */
var listApp = angular.module('listApp', []);

/* Контроваллер  */
listApp.controller('listCtrl', function ($scope) {
    $scope.data = model;

    $scope.addCourse = function () {
        $scope.data.courses.push({
            name: $scope.courseName,
            passed: false
        });
        $scope.courseName = '';
    };

    $scope.showText = function (passed) {
        return passed ? 'да' : 'нет';
    };


    $scope.setStyle = function (passed) {
        return passed ? 'color: #3c763d' : 'color: #d9534f';
    }

});




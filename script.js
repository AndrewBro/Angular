console.clear();

/* Модель */
/* у модели есть два свойство user, courses */
/*  именно здесь мы видим как храняться данные , это и есть MODEL */
var model = {
    user: 'Micola',
    courses: [],
    valuation: []
};


/* Модуль */
var listApp = angular.module('listApp', []);


/* Контроваллер  */
listApp.controller('listCtrl', function () {
    var ctrl = this;
    ctrl.data = model;

    ctrl.addCourse = function () {

        // НЕ МОГУ СДЕЛАТЬ ВАЛИДАЦИЮ
        if((ctrl.courseName === '') || (ctrl.coursePassed === '') || (ctrl.courseValuation === '' )){
            alert('Заполните все поля,  !');
            return ctrl;
        }
        // console.log(typeof ctrl.courseValuation);


        ctrl.data.courses.push({
            name: ctrl.courseName,
            passed: ctrl.coursePassed,
            valuation: ctrl.courseValuation

        });

        ctrl.courseName = '';
        ctrl.coursePassed = '';
        ctrl.courseValuation = '';

    };
});






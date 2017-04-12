/* Модуль */
var app = angular.module('app', []);

/* Service */
app.service('postsService', postsService);

// moreTextCtrl.$inject = ['$http'];
function postsService($http) {
    this.getData = function () {
        // return $http.get('https://jsonplaceholder.typicode.com/photos')
        return $http.get('https://jsonplaceholder.typicode.com/posts')
    }
}


/* Контроллер  */
app.controller('postsCtrl', moreTextCtrl);

moreTextCtrl.$inject = ['$scope', 'postsService'];

function moreTextCtrl($scope, postsService) {
    const vm = this;
    vm.searchQuery = '';
    vm.posts = [];

    search();

    function search() {
    postsService.getData(vm.searchQuery)
        .then(function (response) {
           vm.posts = response.data;
        });
    }
}












// function moreTextCtrl($scope, postsService) {
//     const vm = this;
//     vm.isDataLoading = false;
//     vm.searchQuery = '';
//     vm.posts = [];
//
//     search(vm.searchQuery);
//
//     $scope.$watch('vm.searchQuery', function (q) {
//         if (!q) { return }
//         search(q);
//     });
//
//     function search() {
//         vm.isDataLoading = true;
//         postsService.getData()
//             .then(function (response) {
//                 vm.posts = response.data;
//             });
//             .finally(function () {
//                 vm.isDataLoading = false;
//             });
//     }
// }


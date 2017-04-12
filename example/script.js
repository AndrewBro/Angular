angular.module('myApp', [])
    .controller('myCtrl', function($scope) {
        $scope.tempInput = 'Some test 1';
        $scope.taskArray = ['Это задание 1', 'Это задание 2'];

        $scope.addNew = function(){
            if($scope.tempInput) {
                $scope.taskArray.push($scope.tempInput);
                // $scope.tempInput = "";
            } else {
                console.log('Sorry !')
            }
        }

    });
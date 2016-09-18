angular.module("myApp")
  .controller("myController", ["$scope", function ($scope) {
    $scope.myFirstName = "Tunui";
    $scope.myModel = "Ready Player One";
  }])
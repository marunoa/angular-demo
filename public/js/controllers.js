angular.module("myApp")
  .controller("myController", ["$scope", "mainCharacter", function ($scope, mainCharacter) {
    $scope.myFirstName = "Tunui";
    $scope.myModel = "Ready Player One";
    $scope.mainCharacter = mainCharacter;
  }])
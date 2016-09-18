angular.module("myApp")
  .controller("myController", ["$scope", "mainCharacter", "CharacterVersionFactory", function ($scope, mainCharacter, CharacterVersionFactory) {
    $scope.myFirstName = "Tunui";
    $scope.myModel = "Ready Player One";
    $scope.mainCharacter = mainCharacter;
    $scope.CharacterVersionFactory = CharacterVersionFactory;
  }])
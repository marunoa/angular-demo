angular.module("myApp")
  .controller(
    "myController",
      [ "$scope",
        "mainCharacter",
        "CharacterVersionFactory",
        "BookService",
        function (
          $scope,
          mainCharacter,
          CharacterVersionFactory,
          BookService
        )
        {
          $scope.myFirstName = "Tunui";
          $scope.myModel = "Ready Player One";
          $scope.mainCharacter = mainCharacter;
          $scope.characterVersionFactory = CharacterVersionFactory;
          $scope.books = BookService.getBooks();
  }])
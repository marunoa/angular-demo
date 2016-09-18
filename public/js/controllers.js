angular.module("myApp")
  .controller(
    "myController",
      [ "$scope",
        "mainCharacter",
        "CharacterVersionFactory",
        "BookService",
        "Movies",
        function (
          $scope,
          mainCharacter,
          CharacterVersionFactory,
          BookService,
          Movies
        )
        {
          $scope.myFirstName = "Tunui";
          $scope.myModel = "Ready Player One";
          $scope.mainCharacter = mainCharacter;
          $scope.characterVersionFactory = CharacterVersionFactory;
          $scope.BookService = BookService;
          $scope.movies = [];
          Movies.getMovies()
            .then(function (response) {
              $scope.movies = response.data;
            });
  }])
  .controller(
    "booksController",
      [ "$scope",
        "BookService",
        function (
          $scope,
          BookService
        )
        {
          $scope.BookService = BookService;
  }])
  .controller(
    "moviesController",
      [ "$scope",
        "Movies",
        function (
          $scope,
          Movies
        )
        {
          $scope.movies = [];
          Movies.getMovies()
            .then(function (response) {
              $scope.movies = response.data;
            });
  }])
angular.module("myApp")
  .factory("CharacterVersionFactory", ["mainCharacter", "APP_VERSION", function (mainCharacter, APP_VERSION) {
    return `${mainCharacter} ${APP_VERSION}`;
  }]);
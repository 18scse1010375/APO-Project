angular.module('myapp')
.constant('MY_CONSTANTS', {
  'API_PREFIX': '/apoconsole',
  'API_SUFFIX': '?api_key=asrapikey'
})
.config(function ($routeProvider, $locationProvider, MY_CONSTANTS) {
  $locationProvider.html5Mode(true)
  $routeProvider
  .when(MY_CONSTANTS.API_PREFIX + '/myfirstapi', {templateUrl: MY_CONSTANTS.API_PREFIX + '/templates/myfirstapi.html' + MY_CONSTANTS.API_SUFFIX})
})

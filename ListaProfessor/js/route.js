angular.module("listaProfessores").config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.htm",
        controller: "listaController"
    }).when("/login", {
        templateUrl : "telaLogin.htm",
        controller: "listaController"
    });
   
});

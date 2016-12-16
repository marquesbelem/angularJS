var app = angular.module("listaProfessores",["ngRoute"]);





app.controller("listaController", function ($scope){

	$scope.app = "Lista de Professores";


	$scope.contatos = []; 

	$scope.operadoras = [
	{nome:"Tim", codigo:"41", categoria: "Celular"},
	{nome:"Vivo", codigo:"15", categoria: "Celular"},
	{nome:"Claro", codigo:"19", categoria: "Celular"},
	{nome:"Embratel", codigo:"32", categoria: "Fixo"},
	{nome:"Algum", codigo:"21", categoria: "Fixo"}
	];



	$scope.formacoes = [
	{nome:"Graduação"},
	{nome:"Tecnologo"},
	{nome:"Mestrado"},
	{nome:"Doutorado"}
	
	];

	$scope.adicionar = function (contato){
		$scope.contatos.push(angular.copy(contato)); //Adiciona(push) algo no fim do Array		
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	};


	$scope.apagar = function(contatos){
		$scope.contatos = contatos.filter(function(contato) {
			if(!contato.selecionado) return contato;
		});
	};



	$scope.isContatoSelecionado = function(contatos){
		return contatos.some(function(contato){
			return contato.selecionado;
		});

	};

	$scope.ordenarPor = function(campo){
		$scope.criterioOrdena = campo;
		$scope.direcaoOrdena = !$scope.direcaoOrdena;
	};
});



app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html",
        controller: "listaController"
    });
   
});
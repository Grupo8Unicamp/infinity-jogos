app.controller('PrevisaoController', function($scope, Chamada, $http) {
    var init = function(){
		console.log("vini teste");
		$scope.estilo = "{}";
		console.log(Chamada.teste());
		buscarLigas();
	}
	
	$scope.clicado = function(){
		$scope.estilo = "display:block";
	}
	
	$scope.apostar = function(){
		window.open("http://google.com.br","blank")
	}
	
	$scope.fecharJanela = function(){
		$scope.estilo = "";
	}
	
	var buscarLigas = function(){
		$http.get({method: 'GET', url: 'https://football-prediction-api.p.rapidapi.com/api/v2/list-federations', headers: {
    'x-rapidapi-host': 'football-prediction-api.p.rapidapi.com',
		'x-rapidapi-key': 'HYXEl082Uymsh2aWsM2cIFNPn7Unp1tUE4ZjsnSDuGQNEffKlB'}})
    	.then(sucessoLigas, erroLigas);
	}
	
	var sucessoLigas = function(data){
		console.log(data);
	}
	
	var erroLigas = function(data){
		console.log(data);
	}
	
	init();
});
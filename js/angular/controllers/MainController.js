app.controller('MainController', ['$scope', function($scope) {
	$scope.current = {
		color: 'blue'
	};

	$scope.lists = [];
	
	$scope.newTitle = {
		title: ''
	};



	$scope.addCard = function(index) {
		if($scope.lists[index].newCard === '') {
			Materialize.toast("Say no to blank cards :(", 4000);
		} else {
			$scope.lists[index].cards.push($scope.lists[index].newCard);
			$scope.lists[index].newCard = '';
		}
		
	};

	$scope.addList = function() {
		if($scope.newTitle.title === '') {
			Materialize.toast("Say no to blank titles :(", 4000);
		} else {
			$scope.lists.push({
				title: $scope.newTitle.title,
				cards: [],
				editCard: [],
				newCard: ''
			});
			$scope.newTitle.title = '';
		}
		
	};
	$scope.deleteCard = function(listIndex, cardIndex) {
		$scope.lists[listIndex].cards.splice(cardIndex, 1);
	};

	$scope.deleteList = function(index) {
		$scope.lists.splice(index, 1);
	}	


	$scope.editCard = function(listIndex, cardIndex) {

	};

	$scope.deselectCard = function(index) {
		$scope.lists[index].newCard = '';
	};

	$scope.deselectTitle = function() {
		$scope.newTitle.title = '';
	};

}]);
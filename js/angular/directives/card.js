app.directive('editCard', function() {
	return {
		restrict : 'E',
		scope: {
			card: '='
		},
		replace: true,
		templateUrl:'js/angular/directives/card.html',
		link: function(scope, element, attrs) {
			scope.edit = function() {
				
			}
		}
	};
});
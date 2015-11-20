app.controller('MainController', function() {
	this.newTitle = '';
	this.newCard = '';

	this.lists = [
		{
			title: 'Title1',
			cards: [
				"Content1",
				"Content2"
			]
		},
		{
			title: 'Title2',
			cards: [
				"Content3"
			]
		}
	];


	this.addCard = function(index) {
		this.lists[index].cards.push(this.newCard);
		this.newCard = '';
	};

	this.addTitle = function() {
		this.lists.push({
			title: this.newTitle,
			cards: []
		};);
		this.newTitle = '';
	};

	

	this.deselect = function() {

	};

});
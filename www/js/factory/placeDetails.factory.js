angular.module('vamosJuntas').factory('placeDetailsFactory', function() {
	var place = { report: { title : 'Initial' }};
	function fetchPlace() {
		place.report = {
			title: 'Parada da João Pessoa',
			reports: [
				{ category: 'Local deserto', noOfOccurrences: 3 },
				{ category: 'Mal iluminado', noOfOccurrences: 6 },
				{ category: 'Roubo', noOfOccurrences: 12 }
			]
		};
	}

	return {
		fetchPlace: fetchPlace,
		place: place
	};
});

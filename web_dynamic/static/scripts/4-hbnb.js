$('.cb').click(function () {
	const amenList = []
	$(".cb").each(function () {
		if ($(this).is(":checked")) {
			amenList.push($(this).attr('data-name'));
		}
	});
	$('.amenities').find("h4").text(amenList.join(', '));
});

$.ajax({
	url: 'http://localhost:5001/api/v1/status/',
	type: 'GET',
	success: function (response) {
		$('div#api_status').addClass('available');
		console.log('Estado de la respuesta:', response.status);
	},
	error: function (xhr, status, error) {
		$('div#api_status').removeClass('available');
		console.log('Ocurrió un error en la solicitud');
		console.log('Estado de la respuesta:', xhr.status);
		console.log('Mensaje de error:', error);
	}
});

function allPlacesPost() {
	$.ajax({
		type: "POST",
		// cambie 0.0.0.0 a localhost - patri
		url: 'http://localhost:5001/api/v1/places_search/',
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify({}),
		success: function (data) {
			for (let place of data) {
				$('.places').append(articlePlace(place));
			}
			console.log("Request Success");
		}
	})
}

allPlacesPost();

function articlePlace(place) {
	let article = `
        <article>
        <div class="title_box">
        <h2>${place.name}</h2>
        <div class="price_by_night">${place.price_by_night}</div>
        </div>
        <div class="information">
        <div class="max_guest">${place.max_guest} Guest${place.max_guest != 1 ? 's' : ''}</div>
        <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms != 1 ? 's' : ''}</div>
        <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms != 1 ? 's' : ''}</div>
        </div>
        <div class="description">
            ${place.description}
        </div>
        </article>`;
	return (article);
}

$('button').click(function () {
	console.log('boton search clickeado')
	$('.places').empty();
	const amenIDList = []
	$(".cb").each(function () {
		if ($(this).is(":checked")) {
			amenIDList.push($(this).attr('data-id'));
		}
	});
	console.log(`amenities IDs selected : ${amenIDList}`);
	let dictAmenities = {}
	dictAmenities['amenities'] = amenIDList;
	
	$.ajax({
		type: "POST",
		url: 'http://localhost:5001/api/v1/places_search/',
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(dictAmenities),
		success: function (data) {
			for (let place of data) {
				$('.places').append(articlePlace(place));
			};
		}
	})
});

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
            console.log("llamada exitosa");
            for (let place of data) {
                console.log(place);
                // $('section.places').add("article").text(`${JSON.stringify(place)}`);
                $('section.places').add('article').text(`${place.name}`);
            }
        }
    })
}

allPlacesPost();
// let output = ""
// for (value in place) {
//     console.log(place[value]);
//     output.concat(place[value]);
// }
$('.cb').click(function() {
  const amenList = []
  $(".cb").each(function(){
    if($(this).is(":checked")){
        amenList.push($(this).attr('data-name'));
    }
  });
  $('.amenities').find("h4").text(amenList.join(', '));
});

$.ajax({
  url: 'http://localhost:5001/api/v1/status/',
  type: 'GET',
  success: function(response) {
    $('div#api_status').addClass('available');
    console.log('La solicitud se realizó correctamente');
    console.log('Estado de la respuesta:', response.status);
  },
  error: function(xhr, status, error) {
    $('div#api_status').removeClass('available');
    console.log('Ocurrió un error en la solicitud');
    console.log('Estado de la respuesta:', xhr.status);
    console.log('Mensaje de error:', error);
  }
});

$('.cb').click(function() {
  const amenList = []
  $(".cb").each(function(){
    if($(this).is(":checked")){
        amenList.push($(this).attr('data-name'));
    }
  });
  $('.amenities').find("h4").text(amenList.join(', '));
});


const request = require('request');

request('http://0.0.0.0:5001/api/v1/status/', (err, response) => {
  if (response === 'OK') {
    $('div#api_status').removeClass('available');
  } else {
    $('div#api_status').addClass('available');
  }
  if (err) {
    console.log(err);
  }
});
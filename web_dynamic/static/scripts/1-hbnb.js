
let checkedAmenity = {};

$(document).ready(() => {
  $('.cb').click(function() {
    const amenList = []
    $(".cb").each(function(){
      if($(this).is(":checked")){
          amenList.push($(this).attr('data-name'));
      }
    });
    $('.amenities').find("h4").text(amenList);
  });
});

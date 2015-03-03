//accordian
var action="click";
var speed="500";

$(document).ready(function() {
  $('li.q').on(action ,function(){
    // Get next element

    $(this).next()
     .slideToggle(speed)
          //Slect all other answers
        .siblings('li.a')
            .slideUp();

        //get img for active question
        var img = $(this).children('img');

        //Remove the 'rotate' class for all images except the active
          $('img').not(img).removeClass('rotate');

          //toggle rotate class

          img.toggleClass('rotate');
  });
});

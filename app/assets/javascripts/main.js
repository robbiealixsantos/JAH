$(document).ready(function(){

    $("video").prop('muted', true);
    $("video").prop("volume", 0.1);

    // $("video").click( function (){
    // $(this).prop('muted', !$(this).prop('muted'), !$(this).prop("volume", 0.1) );
    // });

    var un_mute = document.getElementById('un-mute');

    un_mute.onclick = function() {
      $("video").prop('muted', !$("video").prop('muted'), $("video").prop("volume", 0.1) );
    };

    $('div.dropdown').each(function() {
    var $dropdown = $(this);

    $("a.dropdown-link", $dropdown).click(function(e) {
      e.preventDefault();
      $div = $("div.dropdown-container", $dropdown);
      $div.toggle();
      $("div.dropdown-container").not($div).hide();
        return false;
      });

    });


  $('#contact-link').on("click", function(event){
    event.preventDefault();
    $('#contact').toggle();
  });

});
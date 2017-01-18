$(document).ready(function(){

    $("video").prop('muted', true);
    $("video").prop("volume", 0.1);

    $("video").click( function (){
    $(this).prop('muted', !$(this).prop('muted'));
    });

});
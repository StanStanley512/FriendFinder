$(document).ready(function () {
    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('#add-song-modal').modal();

    $('.add-song').on('click', function(){
        console.log('clicked');
        $('#add-song-modal').modal('open');
    })
    
    

    function loadQueue() {

    };

    loadQueue();
});
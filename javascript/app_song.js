$(document).ready(function () {
    localStorage.clear()

    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('#add-to-queue-modal').modal();
   

    // open modal
    $('#song-collection').on('click', '.avatar', function(){
        let Ava = this
        
        //add to UpNext on close
        $('#add-to-queue-modal').modal({
            dismissible: false,
        }); 

        // modal btn listeners
        $('#add-to-queue-modal').modal('open');
        $('#no-add-song').on('click', function(){
            $('#add-to-queue-modal').modal('close')
        });
        $('#remove-add-song').on('click', function(){
            console.log('yes');
            console.log(Ava['data-song'])
            
            //remove Avtar


        });
        $('#yes-add-song').on('click', function(){
            console.log('yes');
            //remove Avtar


        });
        
    })
    
    
    

    // function callSongs() {
    //     let queryURL = ' '

    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function(response) {

    //     });
    // };

    // callSongs();
});
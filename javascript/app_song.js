$(document).ready(function () {
    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('#add-to-queue-modal').modal();

    //avatar constructor
    Avatar = function(song, artist, cover){
        this.song = song;
        this.artist = artist;
        this.cover = cover;
    }
    Avatar.prototype.createAva = function(){
    let avaItem = $('<li>');
    avaItem.attr('class','collection-item avatar');
    let img = $('<img>');

    img.attr({
        src : this.cover,
        class : 'circle'
    });
    let songBlock = $('<span>');
    songBlock.attr('class', 'title');
    songBlock.text(this.song);
    let artistBlock = $('<p>');
    artistBlock.text(this.artist);
    let btn = $('<button>');
    btn.attr('class', 'secondary-content btn');
    let icn = $('<i>');
    icn.attr('class', 'material-icons add-song');
    icn.text('add_box');
    btn.append(icn);
    avaItem.append([img, songBlock,artistBlock, btn]);
        $('#song-collection').prepend(avaItem);
    }





    // open modal
    $('#song-collection').on('click', '.btn', function(){
        $('#add-to-queue-modal').modal('open');
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
Avatar = function(song, artist, cover){
    this.song =song;
    this.artist = artist;
    this.cover = cover;
}
Avatar.prototype.createAva = function(){
let avaItem = $('<li>');
avaItem.attr({
    class :'collection-item avatar',
    data: {
        song: this.song,
        artist: this.artist
    }
});
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
avaItem.append([img, songBlock,artistBlock]);
    $('#song-collection').prepend(avaItem);
}
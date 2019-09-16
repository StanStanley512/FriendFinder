let constructCount = 0;
Avatar = function(song, artist, cover){
    this.song =song;
    this.artist = artist;
    this.cover = cover;

    songData = this.song;
    artistData = this.artist;
    coverData = this.cover;

}
Avatar.prototype.createAva = function(){
    let avaItem = $('<li>');
    avaItem.attr({
        'class' : 'collection-item avatar',
        'data-song' : songData,
        'data-artist' : artistData,
        'data-cover' : coverData,
        'id' : 'ava-'+constructCount
    });

    let img = $('<img>');
    img.attr({
        'src' : this.cover,
        'class' : 'circle', 
        
    });
    let songBlock = $('<span>');
    songBlock.attr('class', 'title');
    songBlock.text(this.song);
    let artistBlock = $('<p>');
    artistBlock.text(this.artist);
    avaItem.append([img, songBlock,artistBlock]);
        
    $('#song-collection').prepend(avaItem);
    // local storage
    localStorage.setItem(`Ava-${constructCount}`, avaItem)
    constructCount++;
}
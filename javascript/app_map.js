$(document).ready(function () {
    $('.carousel').carousel();
    $('.sidenav').sidenav();

    function getLocationsNearAddr() {
        var queryURL = "https://api.tomtom.com/search/2/search/karaoke.json?key=90e9rkuEupM3gLfROkv1nrNqGj6iBeCH&lat=30.2672&lon=-97.7431"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            console.log(response);

            for(let i = 0; i < response.results.length; i++) {
                // Create and save a reference to new empty table row
                const tRow = $('<tr>');

                // Create and save references to td elements from the AJAX response object
                const name = $('<td>').text(response.results[i].poi.name);
                const addr = $('<td>').text(response.results[i].address.freeformAddress);
                const phone = $('<td>').text(response.results[i].poi.phone);
                const url = $('<td>').text(response.results[i].poi.url);
                const location = $('<td>').text(`Latitude: ${response.results[i].position.lat} Longitude: ${response.results[i].position.lon}`);

                // Append the td elements to the new table row
                tRow.append(name);
                tRow.append(addr);
                tRow.append(phone);
                tRow.append(url);
                tRow.append(location);

                // Append the table row to the tbody element
                $('tbody').append(tRow);
            }
        });
    };

    getLocationsNearAddr();
  });

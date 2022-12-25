var hotels = {
    hotel1: {
        name: "grange beauchamp hotel",
        location:"london",
        image:"assets/images/london.jpg",
    },
    hotel2: {
        name: "hotel binkowski",
        location:"polonia",
        image: "assets/images/polonia.jpg",
    },
    hotel3: {
        name: "hard rock hotel",
        location:"maldivas",
        image: "assets/images/maldivas.jpg",
    },
    score:"",
    anonimous: undefined
}


var selectionHotel = prompt("Del 1 al 3, elija un hotel para puntuar");
var hotel = "hotel"+selectionHotel;
document.getElementById("nameHotel").innerHTML = hotels[hotel].name;
document.getElementById("locationHotel").innerHTML = hotels[hotel].location;
document.getElementById("imageHotel").src = hotels[hotel].image;

var star = {
    5: "&#9733 &#9733 &#9733 &#9733 &#9733",
    4: "&#9733 &#9733 &#9733 &#9733 &#9734",
    3: "&#9733 &#9733 &#9733 &#9734 &#9734",
    2: "&#9733 &#9733 &#9734 &#9734 &#9734",
    1: "&#9733 &#9734 &#9734 &#9734 &#9734",
}

var clientScore = prompt ("Del 1 al 5, por favor puntue este hotel");
hotels.score = document.getElementById("stars").innerHTML = star[clientScore];


hotels.anonimous = confirm("¿Desea realizar esta reseña de forma anónima?");
document.getElementById("checkbox").checked = hotels.anonimous;





var images = [];
imagenes["The Mysterious Force of Gravity Explained by Neil deGrasse Tyson"] = "../../images/thumbnails/gravity/gravity_neildegrasse_tyson.jpg";

function video (language, title, creator, time){
    this.image = new Image();
    this.language = language;
    this.title = title;
    this.creator = creator;
    this.time = time;

    this.image.src = images[this.title]
}



document.addEventListener("load", loadVideos);

function loadVideos (){

    for (let i = 0; i < 10; 1++){

        random = Math.floor(Math.random() * videoArray.length);

        html += '<div class="swiper-slide">';
            html += '<a href="#" class="link">';
            html += '<img src=\"'+videoArray[i].image.src+'\" alt=\"'+videoArray[i].alt+'\">';
                html += '<div class="language">' + videoArray[i].language + '</div>';
                html += '<section class="information">';
                    html += '<div class="information__container">';
                    html += '<h3>' + videoArray[i].title + '</h3>';
                        html += '<div class="information__container--text">';
                            html += '<p>' + videoArray[i].creator + '</p>';
                            html += '<p>' + videoArray[i].time + '</p>';
                        html += '</div>';
                    html += '</div>';
                html += '</section>';
            html += '</a>';
        html += '</div>';

        document.getElementById("insert").innerHTML = html;
    }
    
}
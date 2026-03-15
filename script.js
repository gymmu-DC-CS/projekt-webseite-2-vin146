let aktuellesVideo = 1;

function wechselVideo() {

    let video = document.getElementById("sideVideo");

    if (aktuellesVideo === 1) {
        video.src = "76041-557904747_small.mp4"; 
        aktuellesVideo = 2;
    } 
    else if (aktuellesVideo === 2) {
        video.src = "16612175-hd_1920_1080_30fps.mp4";    
        aktuellesVideo = 3;
    } 
    else {
        video.src = "1456996-hd_1920_1080_30fps.mp4"; 
        aktuellesVideo = 1;
    }

    video.play();
}
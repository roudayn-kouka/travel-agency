document.addEventListener('DOMContentLoaded', function () {
    var videos = document.querySelectorAll('.video-hover');

    videos.forEach(function (video) {
        video.addEventListener('mouseenter', function () {
            video.currentTime = 10;
            video.play();
        });

        video.addEventListener('mouseleave', function () {
            video.pause();
        });
    });
});

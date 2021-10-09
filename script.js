var dotScreenshot = document.querySelectorAll(".dot__screenshot");
var dotFeedback = document.querySelectorAll(".dot__feedback");
var prevBtn = document.getElementsByClassName("prev__btn")[0];
var nextBtn = document.getElementsByClassName("next__btn")[0];
var video = document.getElementsByClassName("video")[0];
var playBtn = document.getElementById("play__btn");
var topBtn = document.getElementsByClassName("move__to__top__btn")[0];

for (var i = 0; i < dotScreenshot.length; i++) {
    dotScreenshot[i].addEventListener("click", function() {
        var imgId = event.path[0].id.charAt(7);
        if (imgId == 6 || imgId == 1) showHideImg(imgId, "slide__imgs", "notshown__ss__img");

        selectImg("slide__imgs", "selected__app__img", "slide__img" + imgId, dotScreenshot);
        selectDot(dotScreenshot, "selected__screenshot__dot", event.path[0].id);
    });
}

for (var i = 0; i < dotFeedback.length; i++) {
    dotFeedback[i].addEventListener("click", function() {
        var clientImgId = event.path[0].id.charAt(7);

        if (clientImgId == 4 || clientImgId == 1)
            showHideImg(clientImgId, "mySlides", "notshown__client__img");

        selectImg("mySlides", "selected__img", "feedback__img" + clientImgId);
        selectDot(dotFeedback, "selected__feedback__dot", event.path[0].id);
    });
}

prevBtn.addEventListener("click", function() {
    var currentDot = document.getElementsByClassName("selected__feedback__dot")[0];
    var id = (parseInt(currentDot.id.charAt(7)) - 1).toString();
    btnPrevNext(id == 0 ? id = 4 : id);
});

nextBtn.addEventListener("click", function() {
    var currentDot = document.getElementsByClassName("selected__feedback__dot")[0];
    var id = (parseInt(currentDot.id.charAt(7)) + 1).toString();
    btnPrevNext(id == 5 ? id = 1 : id);
});

function showHideImg(id, img, notShownClassName) {
    var hiddenImg = document.getElementsByClassName(notShownClassName)[0];
    hiddenImg.classList.remove(notShownClassName);

    var showImg =
        img == "slide__imgs" ?
        document.getElementsByClassName(img)[id == 6 ? id = 0 : (id == 1 ? id = 5 : id)] : document.getElementsByClassName(img)[id == 4 ? id = 0 : (id == 1 ? id = 3 : id)];

    showImg.classList.add(notShownClassName);
}

function selectImg(imgName, selectedImgName, imgId) {
    var imgs = document.getElementsByClassName(imgName);
    Array.from(imgs).forEach(element => {
        element.classList.remove(selectedImgName);
    });

    var selectedImg = document.getElementById(imgId);
    selectedImg.classList.add(selectedImgName);
}

function selectDot(dotType, selectedDotName, DotId) {
    dotType.forEach(element => {
        element.classList.remove(selectedDotName);
    });

    var selectedDot = document.getElementById(DotId);
    selectedDot.classList.add(selectedDotName);
}

function btnPrevNext(id) {
    if (id == 4 || id == 1) showHideImg(id, "mySlides", "notshown__client__img");
    var currentClientImgId = "feedback__img" + id;
    selectImg("mySlides", "selected__img", currentClientImgId);
    selectDot(dotFeedback, "selected__feedback__dot", "fb__dot" + id);
}

playBtn.addEventListener("click", function() {
    video.controls = true;
    video.play();
    playBtn.style = "display: none";
});

topBtn.addEventListener("click", function() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});
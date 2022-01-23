function init(){
    ul = document.getElementById('image_slider');
    liItems = ul.children;
    imageNumber = liItems.length;
    imageWidth = liItems[0].children[0].clientWidth;
    // set ul's width as the total width of all images in image slider.
    ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
    prev = document.getElementById("prev");
    next = document.getElementById("next");
    /*.onclike = onClickPrev() will be fired when onload; is this because closure?? */
    prev.onclick = function(){ onClickPrev();};
    next.onclick = function(){ onClickNext();};
}// JavaScript Document
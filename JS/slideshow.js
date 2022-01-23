// JavaScript Document

var myImage=document.getElementById("myPhoto");

var imageArray=["IMG/GW1.jpg", "IMG/GW2.jpg", "IMG/GW3.jpg", "IMG/GW4.jpg", "IMG/GW5.jpg", "IMG/GW6.jpg"];

var imageIndex=0;

function changeImage () {
	myPhoto.setAttribute("src", imageArray [imageIndex]);
	imageIndex++;
	if (imageIndex>=imageArray.length) {
		imageIndex=0;
	}
	

}

var intervalHandle = setInterval(changeImage,2000);

myPhoto.onclick=function() {
	clearInterval(IntervalHandle);
}


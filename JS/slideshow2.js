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

    var numimg = 4;
    var curimg = 1;

  function  goback() {
    var im=document.getElementById("image");
    if(curimg>0)
   {
    im.src = images[curimg-1];
    curimg = curimg - 1;
   }else{
    alert("This is the first image");
   }


}
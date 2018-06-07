var photos = document.querySelectorAll(".photo");
var current_photo = 0;

var autos;

function auto(){
    document.querySelector(".arrow_next").click();
    console.log(1);
};

$(".darken_background").click(function(){
	$(".darken_background").toggle();
        clearInterval(autos);
});

$(".display_photo").click(function(e){
	e.stopPropagation();
});

$(".arrow_next").click(function(e){
	e.stopPropagation();
        current_photo *= 1;
	current_photo = current_photo>=(photos.length-1)? 0 : (current_photo  + 1);
	$("img#show_photo").attr("src", $(photos[(current_photo)]).attr("src"));
        console.log(current_photo);
        clearInterval(autos);
        autos = setInterval(auto, 3000);
});

$(".arrow_back").click(function(e){
	e.stopPropagation();
	
	current_photo = (current_photo*1)==0? (photos.length-1) : (current_photo  - 1);
	$("img#show_photo").attr("src", $(photos[(current_photo)]).attr("src"));
        console.log(current_photo);
        clearInterval(autos);
        autos = setInterval(auto, 3000);   
});

for(var i=0;i<photos.length;i++){
	photos[i].setAttribute("n", i);
	photos[i].addEventListener('click', function(){
		$(".darken_background").toggle();
		$("img#show_photo").attr("src", $(this).attr("src"));
		current_photo=this.getAttribute("n");
                autos = setInterval(auto, 3000);
	});
} 
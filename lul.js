function simpleLibrary(library, image, hours, seats, capacity, day, sound, food) {
    var popup = document.getElementById("myPopup");
    var soundimage = '';
    var foodimg = '';
    if (sound) {
    soundimage = 'https://i.imgur.com/d4fQUV5.png';
    } else {
    soundimage = 'https://i.imgur.com/QuEuwB4.png';
    }
    if (food) {
    foodimg = 'https://i.imgur.com/J896HT9.png';
    } else {
    foodimg = 'https://i.imgur.com/eZpInTj.png';
    }
    var text = '<img src =' + image + ' width = "100%" height = "auto"><p style = "text-align: left; line-height: 5px;"><span style="font-size: 13pt; font-family: "book antiqua", palatino;"><strong>&nbsp;&nbsp;&nbsp;' + library + '&nbsp;</strong></span></p><p style = "text-align: left;line-height: 5px;"><span style="font-size: 10pt; font-family: "book antiqua", palatino;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src =' + soundimage + ' width = "7%" height = "auto">&nbsp;<img src = ' + foodimg + ' width = "7%" height = "auto">&nbsp;'+ day + '&nbsp;Hours: ' + hours + '</p><p style = "text-align: left;line-height: 10px;"><span style="font-family: "book antiqua", palatino;"><strong>&nbsp;&nbsp;&nbsp;Open Seats:&nbsp;' + seats + '&nbsp;</strong></span></p><p style = "text-align: left;line-height: 5px;"><span style="font-family: "book antiqua", palatino;"><strong>&nbsp;&nbsp;&nbsp;Capacity:&nbsp;' + capacity + '&nbsp;full</strong></span></p><p style = "text-align: right; line-height: 5px;><span style="font-size: 13pt; font-family: "book antiqua", palatino;"><strong> See More &nbsp;&nbsp;&nbsp;&nbsp; </p>';
    popup.innerHTML = text;
    if (popup.style.opacity == 0) {
    popup.classList.remove("fade");
    popup.classList.add("show");
    popup.style.opacity = 1;
    } else {
    popup.classList.remove("show");
    popup.classList.add("fade");
    popup.style.opacity = 0;
    }

function seeMore() {
	var popup = document.getElementById("moreLibrary");
	if (popup.visibility == "hidden") {
		popup.classList.toggle("show");
	} else {
		popup.classList.toggle("fade");
	}
	
}
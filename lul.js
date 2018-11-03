function simpleClick() {
	var popup = document.getElementById("simpleLibrary");
    if (popup.style.opacity == 0) {
    popup.classList.remove("fade");
    popup.classList.add("show");
    popup.style.opacity = 1;
    } else {
    popup.classList.remove("show");
    popup.classList.add("fade");
    popup.style.opacity = 0;
    }
}

function myFunction() {
    
    
}
function seeMore() {
	var popup = document.getElementById("moreLibrary");
	if (popup.visibility == "hidden") {
		popup.classList.toggle("show");
	} else {
		popup.classList.toggle("fade");
	}
	
}
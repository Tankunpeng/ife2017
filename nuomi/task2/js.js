function $(id){return document.querySelectorAll(id)}
function contextMenu(evt){
	$("#contextmenu")[0].classList.add("show")
	var pointerX=evt.clientX
	var pointerY=evt.clientY
	var width = $("#contextmenu")[0].offsetWidth;
	var height = $("#contextmenu")[0].offsetHeight;

	$("#contextmenu")[0].style.left=pointerX+width<window.innerWidth?
									pointerX+"px":
									Math.max(0,pointerX-width)+"px";
	$("#contextmenu")[0].style.top=pointerY+height<window.innerHeight?
								   pointerY+"px":
								   Math.max(0,pointerY-height)+"px";
}
function noContext(evt){
	$("#contextmenu")[0].classList.remove("show");
	evt.preventDefault()
}
function closeMenu(evt){
	$("#contextmenu")[0].classList.remove("show")
}

window.onload=function(){
	area=$(".menu-area");
	$("html")[0].addEventListener("contextmenu",noContext,true)
	for(var i=0;i<area.length;i++){
		console.log(i,area[i])
		area[i].addEventListener("contextmenu",contextMenu)
	}
	$("html")[0].onclick=closeMenu;
}
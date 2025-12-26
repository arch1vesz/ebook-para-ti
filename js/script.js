
const flipbook = document.getElementById("flipbook");


$('#flipbook').turn('page', pageNumber);
if(pageNumer === 1 || pageNumber === 8){
    flipbook.style.backgroundColor = "black";
}
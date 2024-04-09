const carosual = document.quesySelector(".carosual");

let isDragging = false, startX,startScrollLeft;

const dragStart = (e) => {
    isDragging = true;
    carosual.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carosual.scrollLeft;

}

const dragging = (e) => {
    if(!isDragging) return;
    carosual.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () =>
{
    isDragging = false;
    carosual.classList.remove("dragging"); 
}
carosual.addEventListener("mousedown", dragStart);
carosual.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
let slideIndex = 1;

window.onload = (event) => {
    console.log("page is fully loaded");
    showSlides(slideIndex+1);
};




function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlides(n){
    showSlides(slideIndex = n);
}


function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slide");
   
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");

    }

    
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex - 1].className += " active";

}
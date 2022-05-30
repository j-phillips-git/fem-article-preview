
document.querySelector(".btn").addEventListener("click", myFunction);

function myFunction() {
    document.querySelector(".share-wrapper").classList.toggle("share-visible");
}

document.querySelectorAll(".btn")[1].addEventListener("click", myFunction);

function myFunction() {
    document.querySelector(".share-wrapper").classList.toggle("share-visible");
}
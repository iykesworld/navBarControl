const button = document.querySelector(".bit");
const dropdown = document.querySelector(".dropdown_wrapper");

button.addEventListener("click", ()=>{
    console.log("come");
    dropdown.classList.remove("none");
    dropdown.classList.toggle("hide");
});

document.addEventListener("click", (event)=>{
    const isClickInsideDropdown = dropdown.contains(event.target);
    const isButtonClicked = button.contains(event.target);
    if(!isClickInsideDropdown && !isButtonClicked){
        dropdown.classList.add("hide");
        dropdown.classList.add("dropdown_wrapper--fade-in");
    }
});
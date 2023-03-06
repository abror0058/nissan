const item = document.querySelector(".item")
const sidebar = document.querySelector(".sidebar")
const sec__sidebar = document.querySelector(".sec__sidebar")


function showSide(){
    sec__sidebar.classList.remove("create")
    sidebar.classList.toggle("show")
}
function closeside(){
    sidebar.classList.remove("show")
}
function createSide(){
    sidebar.classList.remove("show")

    sec__sidebar.classList.toggle("create")
}
function removeSide(){
    sec__sidebar.classList.remove("create")
}



function changeTap(event,id){
    let tab = document.getElementById(id);
    let link = event.currentTarget;
    // Removemos las clases CSS de activo en todos los items
    removeActiveClass("tab-pane");
    removeActiveClass("nav-link");
    // Agregamos las clases CSS de activo en los elementos HTML
    tab.classList.add("show","active");
    link.classList.add("active")
}


function removeActiveClass(customClassName){
    var element = document.getElementsByClassName(customClassName);
    // Recorremos cada uno de los elementos HTML (en este caso son 4 tabs) y le sacamos la clase de activo
    element[0].classList.remove("show","active");
    element[1].classList.remove("show","active");
    element[2].classList.remove("show","active");
    element[3].classList.remove("show","active");
    element[4].classList.remove("show","active");
    element[5].classList.remove("show","active");
    element[6].classList.remove("show","active");
}
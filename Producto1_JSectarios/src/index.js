// Funcionalidad Drag & Drop

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (ev.target.matches(".column"))    ev.target.appendChild(document.getElementById(data)); //si no es una columna no hace el drop
}

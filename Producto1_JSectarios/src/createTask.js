// Ubicamos el formulario de anadir una tarea en una constante
const form = document.getElementById("addTask");
const titulo = document.getElementById("recipient-name");
const descripcion = document.getElementById("message-text");
const columna = document.getElementById("select-col");
const btnAddTask = document.getElementById("btnAddTask");
const dropZone1 = document.getElementById("col1");
const dropZone2 = document.getElementById("col2");
const dropZone3 = document.getElementById("col3");

form.addEventListener('submit', checkForm);

let onEdit = false;

function checkForm(e) {
    e.preventDefault();

    if(titulo.value === "" || descripcion.value === "" || columna.value === ""){
        alert("Se han de rellenar todos los campos.")
    } else {
        getData();
    }
}

let data = {};

let getData = () => {
    data['title'] = titulo.value;
    data['description'] = descripcion.value;
    data['column'] = columna.value;
    createTask();
}

let randomDragid = Math.random;

let createTask = () => {

    if (columna.value === "1") {
    dropZone1.innerHTML += `
    <div draggable="true" ondragstart="drag(event)" id="${randomDragid}" class="task">
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <div class="task-button">
            <button class="update-task-button">Actualizar</button> 
            <button class="eliminate-task-button" onclick="deleteTask(this)">Eliminar</button>
        </div>
    </div>
    `
    } 
    
    else if ( columna.value === "2") {
    dropZone2.innerHTML += `
    <div draggable="true" ondragstart="drag(event)" id="${randomDragid}" class="task">
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <div class="task-button">
            <button class="update-task-button">Actualizar</button> 
            <button class="eliminate-task-button" onclick="deleteTask(this)">Eliminar</button>
        </div>
    </div>
    `  
    } 
    
    else {
    dropZone3.innerHTML += `
    <div draggable="true" ondragstart="drag(event)" id="${randomDragid}" class="task">
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <div class="task-button">
            <button class="update-task-button">Actualizar</button> 
            <button class="eliminate-task-button" onclick="deleteTask(this)">Eliminar</button>
        </div>
    </div>
    `
    }
}

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
}

let actTask = (e) => {
    let onActTask = e.parentElement.parentElement;
    data.title = onActTask.children[0].innerHTML;
    data.description = onActTask.children[1].innerHTML;
    data.columna = onActTask.children[2].innerHTM;
    btnAddTask.innerHTML = "Actualizar Tarea";
    onActTask.remove();
    newTask.showModal();
}

let createts = () => {
    window.newTask.showModal()
    btnAddTask.innerHTML = "Crear Tarea";
}

const titulo = document.getElementById("title-tab");
const descripcion = document.getElementById("description-tab");
const autor = document.getElementById("author-tab");
const container = document.getElementById("container-tablones");
const subbtn = document.getElementById("subbtn");

// Funcion showTabs
const URL_GET = 'http://localhost:3005/api/tabs/getAllTablones'; 



function checkFormTab(e) {
    e.preventDefault();

    if (titulo.value === "" || descripcion.value === "" || autor.value ==="") {
    console.log("No se han rellenado todos los campos")
    } else {
    getDataTab();
    };
}

const showTabs = async () =>{

    try {
        const response = await axios.get(URL_GET);
        const data = response.data;
        const tablones = data.map((tablon) => {
            container.innerHTML += `
            <div class="card-body">
            <div class="card">
                <h2 class="card-title">${tablon.titulo}</h5>
                <h3 class="card-subtitle">${tablon.autor}</h6>
                <p class="card-text">${tablon.descripcion}</p>
                <a href="/Producto1_JSectarios/public/toDoList.html" class="btn btn-primary">Acceder</a>
                <button onclick="window.modal.showModal()" class="btn btn-danger float-end"
                    id="eliminar">Eliminar</button>

                <dialog id="modal">
                    <h2>¿Esta seguro que desea eliminar este tablón?</h2>

                    <button class="btn btn-outline-danger" onclick="deleteTablon(${tablon._id})"
                        style="margin-top: 25px; margin-right: 400px; margin-left: 15px;" type="submit" id="delbtn">Si</button>
                    <button class="btn btn-outline-success" onclick="window.modal.close()">No</button>
                </dialog>
            </div>
        </div>
            `
        })
           
    } catch (error) {
        console.log('Error ->', error.message)
    }
}

showTabs();
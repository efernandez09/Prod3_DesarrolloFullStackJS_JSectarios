
const deletebtn = document.getElementById("delbtn");

const URL_DELETE = 'http://localhost:3005/api/tabs/deleteOneTablon/';

const deleteTablon = async (res) => {
    const tablon = await axios.delete(URL_DELETE + res);
    console.log(res)
    // window.modal.close()
}

deletebtn.addEventListener('click', deleteTablon);
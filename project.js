const form = document.getElementById("film-form");//form seçme
const titleElement = document.querySelector("#title");//title seçme
const directorElement = document.querySelector("#director");//director seçme
const urlElement = document.querySelector("#url"); //url seçme

//UI objesini başlatma
const ui = new UI();
//tüm eventleri yükleme
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
}
function addFilm(e) 
{
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;

    if(title==="" || director===""|| url===""){
        //hata
        ui.displayMessages("Tüm alanları doldurunuz...","danger");
    }else{
        //yeni film
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm); //arayüze film ekleme
        ui.displayMessages("Film başarıyla eklendi...","success");
    }



    ui.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();
}
function Storage() {

}
Storage.prototype.addFilmToStorage = function (newFilm) {
    let films = this.getFilmsFromStorage(); //arrayi aldık
    films.push(newFilm);//aldığımız objemizi (newFilmi) arraye ekliyoz
    localStorage.setItem("films", JSON.stringify(films));//arrayi tekrardan localstorage yazma
}
Storage.prototype.getFilmsFromStorage = function () {
    let films;
    if (localStorage.getItem("films") === null) { //localStorage da bu key var mı kontrol ediyoz
        films = []; //yoksa boş array oluştur
    }
    else {
        films = JSON.parse(localStorage.getItem("films")); //varsa olan değeri aldık ve diziye attık
        //localStorage string değer kabul ediyordu biz bu stringleri JSON.parse diyerek diziye attık
    }

    return films;
}
Storage.prototype.deleteFilmFromStorage = function (filmTitle) {
    let films = this.getFilmsFromStorage();
    films.forEach(function (film, index) {//objemizin hangi index de olduğunu aldık
        if (film.title === filmTitle) { //bulunduğumuz objemizin title özelliği gönderdiğimiz filmtitle eşitse array den silmemiz gerekiyor
            films.splice(index, 1); //splice ile siliyoruz.Böylece localstorage dan da kaldırıyoruz
        }
    });
    localStorage.setItem("films",JSON.stringify(films));
}
Storage.prototype.clearAllFilmsFromStorage= function(){
    localStorage.removeItem("films");
}
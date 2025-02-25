let day = prompt("bugun heftenin necenci gunudu")
let mesaj = ""

if(day === "bazar ertesi" || day === "Bazar ertesi") {
    mesaj = "bugun is gunudu"
}else if(day === "cersenbe axsami" || day == "Cersenbe axsami"){
    mesaj = "bugun is gunudu"
}else {
    mesaj = "bugun is gunu deyil"
}
console.log(mesaj)
let day = prompt("bugun heftenin necenci gunudu")
let mesaj = ""

if(day === "bazar ertesi" || day === "Bazar ertesi") {
    mesaj = "bugun is gunudu"
}else if(day === "cersenbe axsami" || day == "Cersenbe axsami"){
    mesaj = "bugun is gunudu"
}else if(day === "cersenbe" || day == "Cersenbe"){
    mesaj = "bugun is gunudu"
}else if(day === "cume axsami" || day == "Cume axsami"){
    mesaj = "bugun is gunudu"
}else if(day === "cume" || day == "Cume"){
    mesaj = "bugun is gunudu"
}else if(day === "senbe" || day == "Senbe"){
    mesaj = "bugun is gunu deyil"
}else if(day === "bazar" || day == "Bazar"){
    mesaj = "bugun is gunu deyil"
}else {
    mesaj = "lutfen doru gunu yazin"
}
console.log(mesaj)
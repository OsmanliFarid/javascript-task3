let name = prompt("adin nedir")
let age = +prompt("nece yasin var")
let gender = prompt("sen kisisen yoxsa qadin")

let mesaj = ""
if(age >= 18 && gender === "q"){
    mesaj = `${name} XANIM yasiniz 18 boyukdur xos gelmisiniz`
}else if(age <= 18 && gender === "q"){
    mesaj = `${name} XANIM yasiniz 18 kiciikdir icaze yoxdu`
}else if(age >= 18 && gender === "k"){
    mesaj = `${name} Cenab yasiniz 18 boyukdur xos gelmisiniz`
}else if(age <= 18 && gender === "k"){
    mesaj = `${name} Cenab yasiniz 18 kiciikdir icaze yoxdu`
}else{
    mesaj = document.write("`${name} form duzgun doldur`")
}
console.log(mesaj);





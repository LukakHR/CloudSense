var numberOfMovies = 0;
var ukupnaCijena = 0;

function dodajFilm() {
    var naziv = document.getElementById("Naziv").value;
    var cijena = parseInt(document.getElementById("Cijena").value);
    var valuta = document.getElementById("Valuta").value;

    if (naziv == "") {
        return;
    }

    if (cijena == "") {
        return;
    }

    if (valuta == "EUR") {
        cijena = cijena * 7.45;
    } else if (valuta == "USD") {
        cijena = cijena * 6.87;
    }

    var row = document.getElementById("Tablica").insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = ++numberOfMovies;
    cell2.innerHTML = naziv;
    cell3.innerHTML = cijena;
    var btn = document.createElement("input");
    btn.type = "button";
    btn.value = "𐄂";
    btn.classList.add("removers");
    cell4.appendChild(btn);

    btn.addEventListener("click", function () {
        ukloniFilm(row.rowIndex);
    });

    ukupnaCijena = ukupnaCijena + cijena;

    document.getElementById("UkupnoBroj").innerHTML = ukupnaCijena;

    if (numberOfMovies > 2) {
        document.getElementById("PopustBroj").innerHTML = Math.round(ukupnaCijena * 5) / 100;
        document.getElementById("ZaBroj").innerHTML = Math.round(ukupnaCijena * 95) / 100;
    } else {
        document.getElementById("PopustBroj").innerHTML = 0.00;
        document.getElementById("ZaBroj").innerHTML = ukupnaCijena;
    }

    document.getElementById("Naziv").value = "";
    document.getElementById("Cijena").value = "";

}

function ukloniFilm(index) {
    var cijena2 = parseInt(document.getElementById("Tablica").rows[index].cells[2].innerHTML);

    ukupnaCijena = ukupnaCijena - cijena2;
    --numberOfMovies;

    document.getElementById("UkupnoBroj").innerHTML = ukupnaCijena;

    if (numberOfMovies > 2) {
        document.getElementById("PopustBroj").innerHTML = Math.round(ukupnaCijena * 5) / 100;
        document.getElementById("ZaBroj").innerHTML = Math.round(ukupnaCijena * 95) / 100;
    } else {
        document.getElementById("PopustBroj").innerHTML = 0.00;
        document.getElementById("ZaBroj").innerHTML = ukupnaCijena;
    }

    document.getElementById("Tablica").deleteRow(index);

    for (var i = 1; i < document.getElementById("Tablica").rows.length; i++) {
        document.getElementById("Tablica").rows[i].cells[0].innerHTML = i;
    }
}

function makniSve() {
    var j = document.getElementById("Tablica").rows.length;
    for (var i = 1; i < j; i++) {
        document.getElementById("Tablica").deleteRow(1);
    }

    ukupnaCijena = 0;
    numberOfMovies = 0;
    document.getElementById("UkupnoBroj").innerHTML = ukupnaCijena;
    document.getElementById("PopustBroj").innerHTML = 0.00;
    document.getElementById("ZaBroj").innerHTML = ukupnaCijena;
}

function dodajNasumican() {
    var n = Math.round(Math.random() * 10);
    var naziv;
    var cijena = Math.round((Math.random()+ 1) * 1000) / 100;

    switch (n) {
        case 0:
            naziv = "Hercules";
            break;
        case 1:
            naziv = "1917";
            break;
        case 2:
            naziv = "Rocketman";
            break;
        case 3:
            naziv = "Terminator";
            break;
        case 4:
            naziv = "Godfather";
            break;
        case 5:
            naziv = "The Martian";
            break;
        case 6:
            naziv = "Interstellar";
            break;
        case 7:
            naziv = "Lord of the Rings";
            break;
        case 8:
            naziv = "Hustlers";
            break;
        case 9:
            naziv = "Die Hard";
            break;
        case 10:
            naziv = "Avatar";
            break;
        default:
            naziv = "Hacksaw Ridge";
    }

    var row = document.getElementById("Tablica").insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = ++numberOfMovies;
    cell2.innerHTML = naziv;
    cell3.innerHTML = cijena;
    var btn = document.createElement("input");
    btn.type = "button";
    btn.value = "𐄂";
    btn.classList.add("removers");
    cell4.appendChild(btn);

    btn.addEventListener("click", function () {
        ukloniFilm(row.rowIndex);
    });

    ukupnaCijena = ukupnaCijena + cijena;

    document.getElementById("UkupnoBroj").innerHTML = ukupnaCijena;

    if (numberOfMovies > 2) {
        document.getElementById("PopustBroj").innerHTML = Math.round(ukupnaCijena * 5) / 100;
        document.getElementById("ZaBroj").innerHTML = Math.round(ukupnaCijena * 95) / 100;
    } else {
        document.getElementById("PopustBroj").innerHTML = 0.00;
        document.getElementById("ZaBroj").innerHTML = ukupnaCijena;
    }
}



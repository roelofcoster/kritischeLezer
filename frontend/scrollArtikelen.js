"use strict"
const scrollArtikelen = event =>{
    var huidig = document.getElementById('tekst_id').getAttribute("value")
    if (event.keyCode == 37 && huidig > 1){    // links
        huidig--
        document.getElementById('tekst_id').setAttribute("value", huidig)
        laadData(nummers[huidig - 1])
    }
    if (event.keyCode == 39 && huidig < nummers.length){    // rechts
        huidig++
        document.getElementById('tekst_id').setAttribute("value", huidig)
        laadData(nummers[huidig - 1])
    }
}

"use strict"
const laadDataViaForm = () =>{
    alert( document.getElementById('tekst_id').getAttribute("value"))
    var huidig = document.getElementById('tekst_id').getAttribute("value")
    if (huidig >= 1 & huidig <= nummers.length ){
        console.log(huidig)
        console.log(nummers[huidig - 1])
        // laadData(nummers[huidig - 1])
    }
}
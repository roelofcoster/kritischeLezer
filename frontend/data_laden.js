"use strict"

const maakPostOptions = tekst_id =>{
    var post_options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({'tekst_id': tekst_id})
    }
    return post_options
}

const laadData = tekst_id =>{
    fetch(window.location.protocol + "//" + window.location.hostname + ":" + window.location.port, maakPostOptions(tekst_id))
    .then(response => response.json())
    .then(woorden => {
        d3.select("#tekst").html("")

        d3.select("#tekst")
            .selectAll("span")
            .data(woorden)
            .enter()
            .append("span")
            .text(x => x.token + " ")
            .attr("lemma", x => x.lemma)
            .attr("class", x => x.upos)
            .attr("head_token_id", x => x.head_token_id)
            .attr("dep_rel", x => x.dep_rel)
    })
    .then(() => kleurIn())
}

const laadNummers = () =>{
    fetch(window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/nummers")
    .then(response => response.json())
    .then(response => {
        nummers = response
        document.getElementById("tekst_id")
            .setAttribute("value", 1)
        var tekst_id = nummers[document.getElementById("tekst_id").getAttribute("value") - 1]
        laadData(tekst_id)
    })
    .then(() => kleurIn())
}

const laadUpos = () =>{
    fetch(window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/upos")
        .then(response => response.json())
        .then(x => linkerbalkVullen(x))        
}
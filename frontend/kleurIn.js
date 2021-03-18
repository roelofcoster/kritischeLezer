"use strict"

const kleurIn = () => {
    d3.select("#form_keuzes")
        .selectAll("input")
        .each(i => {
            var aangevinkt = d3.select("#"+ i)._groups[0][0].checked
            if(aangevinkt){
                d3.select("#tekst")
                    .selectAll("." + i)
                    .attr("style", "background-color: rgba(201, 76, 76, 0.3)")
            } else{
                d3.select("#tekst")
                    .selectAll("." + i)
                    .attr("style", "")
            }
        })
}

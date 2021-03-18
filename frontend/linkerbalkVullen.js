"use strict"

const linkerbalkVullen = keuzes =>{
    d3.select("#form_keuzes")
        .selectAll("span")
        .data(keuzes)
        .enter()
        .append("span")
        .append("label")
        .text(d => d)
        .attr("for", d => d)

    inputs = d3.select("#form_keuzes")
        .selectAll("span")
        .data(keuzes)
        .append("input")
        .attr("type", "checkbox")
        .attr("id", d => d)
        .attr("name", d => d)

    d3.select("#form_keuzes")
        .selectAll("span")
        .append("br")

    inputs.on("change", kleurIn)
}

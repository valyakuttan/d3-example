const scale = 20;
const offset = 10;
const cx = 7 * (scale / 2);
const cy = 7 * (scale / 2);

const canvas = d3.select('#viz')
      .append('svg:svg')
      .attr('width', 800)
      .attr('height', 800);

const group1 = canvas.append('svg:g')
      .attr('transform', `translate(${offset} ${offset})`)
      .attr('fill', 'green')
      .attr('stroke', 'green')
      .attr('stroke-width', 2);

group1.append('svg:rect')
    .attr('width', 7 * scale)
    .attr('height', 7 * scale)
    .attr('x', 0)
    .attr('y', 0)
    .attr('fill', 'white')
    .attr('stroke', 'blue')
    .attr('stroke-width', 3);

group1.append('svg:circle')
    .attr('cx', 0)
    .attr('cy', 7 * (scale / 2))
    .attr('r', 5);




group1.append('svg:circle')
    .attr('cx', cx)
    .attr('cy', 7 * (scale / 2))
    .attr('r', 5);

group1.append('svg:circle')
    .attr('cx', 7 * scale)
    .attr('cy', 7 * (scale / 2))
    .attr('r', 5);


group1.append('svg:line')
    .attr('x1', 0)
    .attr('y1', 7 * (scale / 2))
    .attr('x2', 7 * (scale / 2))
    .attr('y2', 7 * (scale / 2));

group1.append('svg:line')
    .attr('x1', 7 * (scale / 2))
    .attr('y1', 7 * (scale / 2))
    .attr('x2', 7 * scale)
    .attr('y2', 7 * (scale / 2));

let r = Math.acos(7 / (5 * Math.SQRT2));

console.log(Math.round(rad2deg(r)));

function rad2deg(r) {
    return (180 / Math.PI) * r;
}


function rotate(deg) {
    return `translate(${offset + scale} ${offset + scale}) rotate(${deg} ${cx} ${cy})`;
}

const group2 = canvas.append('svg:g')
      .attr('transform', rotate(17.8))
      .attr('fill', 'grey')
      .attr('fill-opacity', 0)
      .attr('stroke', 'grey')
      .attr('stroke-width', 2);

group2.append('svg:rect')
    .attr('width', 5 * scale)
    .attr('height', 5 * scale)
    .attr('x', 0)
    .attr('y', 0)
    .attr('fill', 'white')
    .attr('stroke', 'red')
    .attr('stroke-width', 3);

group2.append('svg:circle')
    .attr('cx', 0)
    .attr('cy', 5 * (scale / 2))
    .attr('r', 5);

group2.append('svg:circle')
    .attr('cx', 5 * (scale / 2))
    .attr('cy', 5 * (scale / 2))
    .attr('r', 5);

group2.append('svg:circle')
    .attr('cx', 5 * scale)
    .attr('cy', 5 * (scale / 2))
    .attr('r', 5);


group2.append('svg:line')
    .attr('x1', 0)
    .attr('y1', 5 * (scale / 2))
    .attr('x2', 5 * (scale / 2))
    .attr('y2', 5 * (scale / 2));

group2.append('svg:line')
    .attr('x1', 5 * (scale / 2))
    .attr('y1', 5 * (scale / 2))
    .attr('x2', 5 * scale)
    .attr('y2', 5 * (scale / 2));

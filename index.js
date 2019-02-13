const scale = 20;
const offset = 20;
const length = 7;
const cx = length * (scale / 2);
const cy = length * (scale / 2);

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
    .attr('width', length * scale)
    .attr('height', length * scale)
    .attr('x', 0)
    .attr('y', 0)
    .attr('fill', 'white')
    .attr('stroke', 'blue')
    .attr('stroke-width', 3);

group1.append('svg:circle')
    .attr('cx', 0)
    .attr('cy', length * (scale / 2))
    .attr('r', 5);




group1.append('svg:circle')
    .attr('cx', cx)
    .attr('cy', length * (scale / 2))
    .attr('r', 5);

group1.append('svg:circle')
    .attr('cx', length * scale)
    .attr('cy', length * (scale / 2))
    .attr('r', 5);


group1.append('svg:line')
    .attr('x1', 0)
    .attr('y1', length * (scale / 2))
    .attr('x2', length * (scale / 2))
    .attr('y2', length * (scale / 2));

group1.append('svg:line')
    .attr('x1', length * (scale / 2))
    .attr('y1', length * (scale / 2))
    .attr('x2', length * scale)
    .attr('y2', length * (scale / 2));

const group2 = canvas.append('svg:g')
      .attr('transform', `translate(${offset} ${offset})`)
      .attr('fill', 'white')
      .attr('stroke', 'red')
      .attr('stroke-width', 2)
      .attr('fill-opacity', 0.3);

const radius = Math.round((5 * Math.SQRT2) / 2) * scale;
group2.append('svg:circle')
    .attr('cx', cx)
    .attr('cy', cy)
    .attr('r', radius);

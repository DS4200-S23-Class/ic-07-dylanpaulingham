const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 500;
const MARGINS = { left: 50, right: 50, top: 50, bottom: 50 };


const data3 = [55000, 48000, 27000, 66000, 90000]

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

const FRAME3 = d3.select("#vis3")
    .append("svg")
    .attr("height", FRAME_HEIGHT)
    .attr("width", FRAME_WIDTH)
    .attr("class", "frame");

// Scaling functions
const MAX_Y = d3.max(data3, (d) => { return d; });

// Scale function
const Y_SCALE = d3.scaleLinear()
    .domain([0, (MAX_Y + 10000)])
    .range([VIS_HEIGHT, 0]);

FRAME3.selectAll("points")
    .data(data3)
    .enter()
    .append("circle")
    .attr("cx", MARGINS.left)
    .attr("cy", (d) => { return Y_SCALE(d) + MARGINS.top })
    .attr("r", 20)
    .attr("class", "point");

FRAME3.append("g")
    .attr("transform", "translate(" + (MARGINS.left + VIS_WIDTH) + ", " + MARGINS.top + ")")
    .call(d3.axisLeft(Y_SCALE).ticks(4))
    .attr("font-size", "20px");
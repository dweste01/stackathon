
import React from 'react'
import * as d3 from "d3"


export default class WaterGraph extends React.Component {
	constructor(props) {
		super(props);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.createChart = this.createChart.bind(this);
		this.tryTwo = this.tryTwo.bind(this)
	}

	componentDidMount() {
		this.createChart();
		this.tryTwo();
	}

	createChart() {
		let years = this.props.waterData.map(oneYear => {
			return oneYear.year
		})
		let galls = this.props.waterData.map(oneYear => {
			return oneYear.nyc_consumption_million_gallons_per_day
		})
		// set the dimensions and margins of the graph
		var margin = {top: 20, right: 20, bottom: 30, left: 50},
		    width = 960 - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom;

		// set the ranges
		var x = d3.scaleTime().range([0, width]);
		var y = d3.scaleLinear().range([height, 0]);

		// define the line
		var valueline = d3.line()
		    .x(function(d) { return x(d.year); })
		    .y(function(d) { return y(d.nyc_consumption_million_gallons_per_day); });

		// append the svg obgect to the body of the page
		// appends a 'group' element to 'svg'
		// moves the 'group' element to the top left margin
		var svg = d3.select("body").append("svg")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		  .append("g")
		    // .attr("transform",
		    //       "translate(" + margin.left + "," + margin.top + ")");


		let data = this.props.waterData;

		  // Scale the range of the data
		  x.domain(d3.extent(data, function(d) { return d.year; }));
		  y.domain([0, d3.max(data, function(d) { return d.nyc_consumption_million_gallons_per_day; })]);

		  // Add the valueline path.
		  svg.append("path")
		      .data([data])
		      .attr("class", "line")
		      .attr("d", valueline);

		  // Add the X Axis
		  svg.append("g")
		      // .attr("transform", "translate(0," + height + ")")
		      .call(d3.axisBottom(x));

		  // Add the Y Axis
		  svg.append("g")
		      .call(d3.axisLeft(y));

	}


	tryTwo() {

		let years = this.props.waterData.map(oneYear => {
			return oneYear.year
		})
		let galls = this.props.waterData.map(oneYear => {
			return oneYear.nyc_consumption_million_gallons_per_day
		})

		// data
		let data = this.props.waterData;
		let svgHeight = 1000;
		let svgWidth = 1000;
		let maxGalls = Math.max(galls)
		let barSpacing = 1;
		let padding = {
			left: 20, right: 0, top: 20, bottom: 20
		}

		// function animateBarsUp() {
			// define the area wtihin which bars will be drawn
			let maxWidth = svgWidth - padding.left - padding.right;
			let maxHeight = svgHeight - padding.top - padding.bottom;
		// }

		let convert = {
			x: d3.scaleLinear(),
			y: d3.scaleLinear()
		}

		let axis = {
			x: d3.axisBottom(), // orient describes axis, labels are rendered where the argument tells it to
			y: d3.axisLeft()
		}
		axis.x.scale(convert.x)
		axis.y.scale(convert.y)

		convert.y.range([maxHeight, 0])
		convert.x.range([0, maxWidth])

		convert.x.domain(data.map(d => {return d.year}))
		convert.y.domain(data.map(d=> {return d.nyc_consumption_million_gallons_per_day}))

		let svg = d3.select("#chart") // markup for svg
					.attr({
						width: svgWidth,
						height: svgHeight
					})
		let chart = svg.append('g') // group node will contain all other nodes
					   .attr({
					   	transform: (d, i) => {return 'translate(' + padding.left + ',' + padding.top + ')'}
					   })

		// x axis
		chart.append('g') // g is the container
			 .attr({
			 	class: 'x axis',
			 	transform: 'translate(0' + maxHeight + ')'
			 })
			 .call(axis.x) // insert an axis inside this node

		chart.append('g') // g is the container
			 .attr({
			 	class: 'y axis',
			 	height: maxHeight
			 })
			 .call(axis.y); // insert axis inside this node


		// draw bars
		let bars = chart.selectAll('g.bar-group')
						.data(data)
						.enter()
						.append('g') // container for each bar
						.attr({
							transform: (d, i) => {return 'translate(' + convert.x(d.year) +', 0)'},
							class: 'bar-group'
						}) // create as many group nodes as there are data points, and then bound the data points to the group nodes

		// render a rectangle in each of the group nodes
		bars.append('rect')
			.attr({
				y: maxHeight,
				height: 0,	// create bars with default height of 0
				width: (d) => {return convert.x.rangeBand(d) - 1},
				class: 'bar'
			})
			// .animateBarsUp()
			.duration(1500)
			.attr({
				y: (d, i) => {return convert.y(d.nyc_consumption_million_gallons_per_day)},	// y coordinate is inverted - 0 is at top
				height: (d, i) => {return maxHeight = convert.y(d.nyc_consumption_million_gallons_per_day)}
			})

	}


	render() {	
		return (
			<div> hey 
				<svg id="chart" />
			</div>)
	}
}
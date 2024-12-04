// Task: https://javascript.info/number#a-random-number-from-min-to-max

import fs from 'fs';
import * as d3 from 'd3';
import {D3Node} from 'd3-node';

const min = 1;
const max = 5;
const outputFileName = `02-5-a-random-number-from-min-to-max.svg`;

// Initialize an empty array, and add random numbers to it
let data = [];
for (let i = 0; i < 1e5; i++) {
  let aRandom = random(min, max);
  console.log(aRandom);
  data.push(aRandom);
}

console.log(`Min: ${d3.min(data)}`);
console.log(`Max: ${d3.max(data)}`);

createChart(data, `yellow`);

/**
 * Generates a random number between the specified minimum and maximum values.
 *
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} A random number between min and max.
 */
function random(min, max) {
  return min + Math.random() * (max - min);
}

/**
 * Creates a chart from the given data and saves it as an SVG file.
 *
 * This function generates a kernel density estimation chart from the input data
 * array.
 *
 * @param {Array<number>} data - The input data array. Each element represents a
 * data point.
 * @param {string} [color='black'] - The color of the line in the chart.
 * Defaults to 'black'.
 */
function createChart(data, color = `black`) {
  const d3n = new D3Node(); // Create a new D3 instance
  const svgWidth = 1000;
  const svgHeight = 750;
  const svg = d3n.createSVG(svgWidth, svgHeight);

  // Set the dimensions and margins of the graph
  const margin = {top: 20, right: 30, bottom: 40, left: 40};
  const width = svgWidth - margin.left - margin.right;
  const height = svgHeight - margin.top - margin.bottom;

  // Create scales
  const x = d3.scaleLinear().domain([0, d3.max(data)]).range([0, width]);

  // Kernel density estimator
  const kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(100));
  const density = kde(data);

  // Update y scale domain to include the maximum density value
  const y = d3.scaleLinear().
      domain([0, d3.max(density, d => d[1])]).
      range([height, 0]);

  // Append a 'g' element to the SVG and transform it according to the margins
  const g = svg.append(`g`).
      attr(`transform`, `translate(${margin.left},${margin.top})`);

  // Draw line
  g.append(`path`).
      datum(density).
      attr(`fill`, `none`).
      attr(`stroke`, color) // Use the color parameter
      .attr(`stroke-width`, 1.5).
      attr(`stroke-linejoin`, `round`).
      attr(`d`, d3.line().curve(d3.curveBasis).x(d => x(d[0])).y(d => y(d[1])));

  // Add x-axis
  g.append(`g`).
      attr(`transform`, `translate(0,${height})`).
      call(d3.axisBottom(x));

  // Add y-axis
  g.append(`g`).call(d3.axisLeft(y));

  // Save as SVG
  fs.writeFileSync(outputFileName, d3n.svgString());

  /**
   * Kernel density estimator function.
   *
   * This function returns a kernel density estimator function that can be used
   * to estimate the density of the input data.
   *
   * @param {Function} kernel - The kernel function to use for density
   * estimation.
   * @param {Array<number>} X - The x-axis values for which to estimate the
   * density.
   * @returns {Function} - The kernel density estimator function.
   */
  function kernelDensityEstimator(kernel, X) {
    return function(V) {
      return X.map(function(x) {
        return [x, d3.mean(V, function(v) { return kernel(x - v); })];
      });
    };
  }

  /**
   * Epanechnikov kernel function.
   *
   * This function returns the Epanechnikov kernel function, which is used in
   * kernel density estimation.
   *
   * @param {number} k - The bandwidth parameter for the kernel. This controls
   * the smoothness of the density estimate.
   * @returns {Function} - The Epanechnikov kernel function.
   */
  function kernelEpanechnikov(k) {
    return function(v) {
      return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
    };
  }
}

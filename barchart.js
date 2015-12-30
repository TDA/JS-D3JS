/**
 * Created by schandramouli on 12/30/15.
 */


function drawBarGraph(jsonData, element) {
  var height = element.height;
  var width = element.width;

  // convert the json to an array of objects with
  // key value pairs language, and loc
  var maxValue = 0;
  var eachObj = [];
  for (key in jsonData) {
    var newDict = {};
    newDict['language'] = key;
    newDict['loc'] = jsonData[key];
    // now find the max value and update
    maxValue = Math.max(maxValue, jsonData[key]);
    eachObj.push(newDict);
  }

  var scale = d3.scale.linear()
    .domain([0, maxValue])
    .range([0, height]);

  var chart = d3.select(element.name)
    .append("svg")
    .attr({
      "width": width,
      "height": height
    });

  var groups = chart.selectAll("g")
    .data(eachObj)
    .enter()
    .append("g")
    // set x to multiples of 20, and y to the baseline by subtracting 'height' from height
    .attr("transform", function (d, i) {
      return "translate(" + (i * 20) + "," + parseInt(height - scale(d.loc)) + ")";
    });

  // create rects for the bars
  var rects = groups.append("rect")
    .attr({
      "width": 18
    })
    .attr("height", function (d, i) {
      return scale(d.loc);
    });

  // create texts for the bars
  var texts = groups.append("text")
    // since rotated, x and y are interchanged
    .attr("y", "1.1em")
    // if the text goes out of screen, put it in
    .attr("x", function (d, i) {
      return (height - scale(d.loc) <= 0) ? -120 : 0;
    })
    .text(function (d) {
      return d.language + " - " + d.loc;
    });
}

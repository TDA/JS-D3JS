/**
 * Created by schandramouli on 12/28/15.
 */

d3.select("body")
  .append("svg").attr({"width": 100, "height": 100})
  .append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");

// looks like obj literals work, yay!
d3.select("svg").append("circle").attr({
  "cx": 40,
  "cy": 40,
  "r": 30
}).style({
  "fill": "rgba(0, 0, 0, 0.8)"
});

var theData = [1, 2, 3];

var theData2 = {
  1:4,
  2:5,
  3:6
};

var p = d3.select("body").selectAll("p")
  .data(d3.keys(theData2)) // imaginary element binds to an array
  .enter()
    .append("p")
      .text(function (data, index) {
        return "index = " + index + " data = "+ data + " value " + theData2[data];
      });

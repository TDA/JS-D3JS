/**
 * Created by schandramouli on 12/28/15.
 */

d3.select("body").append("svg").attr("width", 100).attr("height", 100)
  .append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");

// looks like obj literals work, yay!
d3.select("svg").append("circle").attr({
  "cx": 40,
  "cy": 40,
  "r": 30
});
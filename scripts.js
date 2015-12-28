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
}).style({
  "fill": "blue"
});

var theData = [1, 2, 3];

var p = d3.select("body").selectAll("p")
  .data(theData)
  .enter()
  .append("p")
  .text(function (d,i,f,g) {
    return "i = " + i + " d = "+d + " f= " +f+ " g= " + g;
  });

var jsonData = {
  "JavaScript": 481139,
  "Java": 384648,
  "CSS": 351857,
  "HTML": 283638,
  "PHP": 189458,
  "Python": 120483,
  "Perl": 36228,
  "C": 23878,
  "Ruby": 17226,
  "Swift": 3615,
  "Shell": 2491,
  "Batchfile": 937,
  "Makefile": 654,
  "CMake": 366,
  "C++": 354,
  "ApacheConf": 270
};

var eachObj = [];
for (key in jsonData) {
  var newDict = {};
  newDict['language'] = key;
  newDict['loc'] = jsonData[key];
  eachObj.push(newDict);
}

for (var i = 0; i < eachObj.length; i++) {
  console.log(eachObj[i]);
}

var a = d3.select("body").selectAll("a")
  .data(eachObj)
  .enter()
  .append("p")
  .text(function (d) {
    return " lang = " + d.language + " loc = " + d.loc;
  });

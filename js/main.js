var html = "";
var template = ["<tr>",
                  "<td><a class=\"\" target=\"_blank\" href=\"{{link}}\" role=\"button\">{{link}}</a><br/><small>Created {{date}} by {{name}}</small></td>",
                "</tr>"].join("");
var arr = [
  ["https://www.google.com/search?site=webhp&q=1","2017-01-20", "William Blacklock"],
  ["https://www.google.com/search?site=webhp&q=2","2017-01-20", "William Blacklock"],
  ["https://www.google.com/search?site=webhp&q=3","2017-01-20", "William Blacklock"],
  ["https://www.google.com/search?site=webhp&q=4","2017-01-20", "William Blacklock"],
  ["https://www.google.com/search?site=webhp&q=5","2017-01-20", "William Blacklock"],
  ["https://www.google.com/search?site=webhp&q=6","2017-01-20", "William Blacklock"],
  ["https://www.google.com/search?site=webhp&q=7","2017-01-20", "William Blacklock"],
  ["https://www.google.com/search?site=webhp&q=8","2017-01-20", "William Blacklock"],
  ["https://www.google.com/search?site=webhp&q=9","2017-01-20", "William Blacklock"],
  ["https://www.google.com/search?site=webhp&q=1","2017-01-20", "William Blacklock"],
];

$.each(arr, function(index, el){
  var snippet = template
    .replace(new RegExp("{{link}}", 'g'), el[0])
    .replace(new RegExp("{{date}}", 'g'), el[1])
    .replace(new RegExp("{{name}}", 'g'), el[2]);
  html += snippet;
})

$("#anchor").html(html);

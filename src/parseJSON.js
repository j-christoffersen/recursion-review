// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var i = 0;
  var parseHelper = function() {
    if (json[i] === '[') {
      var arr = [];
      i++;
      while (json[i] !== ']') {
        arr.push(parseHelper());
      }
    } else {
      var end = json.slice(i).indexOf(',');

      var numberString = json.slice(i, end);
      i += end;
      return Number(numberString);
    }
  };
};


// [11,2]

//
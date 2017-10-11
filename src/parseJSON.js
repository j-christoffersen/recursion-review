// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var i = 0;

  var parseHelper = function() {
    if (json[i] === '[') {
      //Array
      var arr = [];
      do {
        i++;
        if (json[i] === ' ') { i++; }
        arr.push(parseHelper());
      } while (json[i] !== ']');
      i++;
      return arr;
    } else if (json[i] === '{') {
      //Object
      var obj = {};
      do {
        i++;
        if (json[i] === ' ') { i++; }
        var key = parseHelper();
        i++;
        if (json[i] === ' ') { i++; }
        obj[key] = parseHelper();
      } while (json[i] !== '}');
      i++;
      return obj;
    } else {
      var s = '';
      
      
      while (i !== json.length && json[i] !== ',' && json[i] !== ']' && json[i] !== '}' && json[i] !== ':') {
        s += json[i];
        i++;
      }
      
      if (s === 'true') {
        return true; 
      } else if (s === 'false') {
        return false;         
      } else if (s === 'null') {
        return null;         
      } else if (s[0] === '\"') {
        return s.slice(1, s.length - 1 ); 
      } else {
        return parseInt(s); 
      }
      
    }
  };

  return parseHelper();
};


// [11,2]

//
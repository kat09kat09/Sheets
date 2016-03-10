angular.module('filters', [])

.filter('percentage', function() {
  return function(input, max) {
    if (isNaN(input)) {
      return input;
    }
    return Math.trunc((parseFloat(input) * 100)) + '%';
  };
})

.filter('pctChange', function() {
  return function(input) {
    var num;

    if (isNaN(input)) {
      return input;
    } else {
      num= parseInt(input, 10); 
    }

    if(num<0){
      return ''+ num +'%'; 
    } else if (num>0) {
      return '+'+ num +'%';
    } else {
      return ''+ num; 
    }
  };
})
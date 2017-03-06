var util = require('./util');

console.log("Hello world");
console.log(process.argv);

console.log(process.argv.length);

//for-loop
for(i=0;i<process.argv.length;i++) {
    console.log(i,process.argv[i]);
}

//forEach()
process.argv.forEach(function(v, i){
    console.log(i, v);
});

//forEach()-2
showIt = function(v, i){
  console.log(i, v);
}
process.argv.forEach(showIt);
//tempCtoF
temp = process.argv[2];
console.log('攝氏溫度', temp, '華氏溫度', temp * (9/5)+32);
//tempCtoF-2
function tempCtoF(c){
  return c*(9/5)+32;
}
console.log('攝氏溫度', temp, '華氏溫度', tempCtoF(temp));
//tempCtoF-3
console.log('攝氏溫度', temp, '華氏溫度', util.tempCtoF(temp));

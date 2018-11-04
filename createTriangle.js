const drawTriangle = require("./src/patternsLib.js").drawTriangle;
const categorizeArguments = require("./src/patternsUtilLib.js").categorizeArguments;

const main = function(){
  let triangleDetails = categorizeArguments(process.argv);
  let triangle = drawTriangle(triangleDetails);
  console.log(triangle.join('\n'));
}

main();

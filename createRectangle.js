const drawRectangle = require("./src/patternsLib.js").drawRectangle;
const categorizeArguments = require("./src/patternsUtilLib.js").categorizeArguments;

const main = function(){
  let rectangleDetails = categorizeArguments(process.argv);
  let rectangle = drawRectangle(rectangleDetails);
  console.log(rectangle.join('\n'));
}

main();

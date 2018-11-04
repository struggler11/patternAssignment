const drawDiamond = require("./src/patternsLib.js").drawDiamond;
const categorizeArguments = require("./src/patternsUtilLib.js").categorizeArguments;

const main = function(){
  let patternDetails = categorizeArguments(process.argv);
  let diamond = drawDiamond(patternDetails);
  console.log(diamond.join('\n'));
}

main();

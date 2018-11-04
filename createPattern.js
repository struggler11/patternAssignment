const lib = require('./src/patternsUtilLib.js');
const lib2 = require('./src/patternsLib.js');
const groupArguments = lib.groupArguments;
const generatePatterns = lib2.generatePatterns;
const zipPatterns = lib2.zipPatterns;

const main = function(){
  let arguments = process.argv;
  let categorizeArguments = groupArguments(process.argv);
  let patterns = generatePatterns(categorizeArguments);
  let mergedPatterns = zipPatterns(patterns[0],patterns[1]); 
  console.log(mergedPatterns);
}

main();

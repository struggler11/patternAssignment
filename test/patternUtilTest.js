const assert = require("assert");
const lib = require("../src/patternsUtilLib.js");

const fillWithStar = lib.fillWithStar;
const fillWithSpace = lib.fillWithSpace;
const fillSpaceEndWithStar = lib.fillSpaceEndWithStar;
const categorizeArguments = lib.categorizeArguments;
const justifyLineRight = lib.justifyLineRight;
const groupArguments = lib.groupArguments;

const repeateCharacter = function(charcater, times){
  return new Array(times).fill(charcater).join("");
}


assert.equal(fillWithStar(1),repeateCharacter("*",1));
assert.equal(fillWithStar(5), repeateCharacter("*",5)),

assert.equal(fillWithStar(10), repeateCharacter("*",10)),
assert.equal(fillWithStar(15), repeateCharacter("*",15)),


assert.equal(fillWithSpace(1),repeateCharacter(" ",1));
assert.equal(fillWithSpace(5),repeateCharacter(" ",5));

assert.equal(fillWithSpace(15),repeateCharacter(" ",15));
assert.equal(fillWithSpace(10),repeateCharacter(" ",10));


assert.equal(fillSpaceEndWithStar(3),repeateCharacter(" ",3)+"*");
assert.equal(fillSpaceEndWithStar(5),repeateCharacter(" ",5)+"*");

assert.equal(fillSpaceEndWithStar(10),repeateCharacter(" ",10)+"*");
assert.equal(fillSpaceEndWithStar(15),repeateCharacter(" ",15)+"*");

assert.deepEqual(categorizeArguments([0,0,"filled",2,2]),{type: 'filled', width: 2, height: 2});
assert.deepEqual(categorizeArguments([0,0,"empty",12,12]),{type: 'empty', width: 12, height: 12});

assert.deepEqual(categorizeArguments([0,0,"hollow",2]),{type: 'hollow', width: 2, height: 2});
assert.deepEqual(categorizeArguments([0,0,"angled",22]),{type: 'angled', width: 22, height: 22});

assert.equal(justifyLineRight('*',0,['','','']), '  *');
assert.equal(justifyLineRight('**',0,['','','']), ' **');

assert.equal(justifyLineRight('***',0,['','','']), '***');
assert.equal(justifyLineRight('*',0,['','','','']), '   *');

let userInput = ['1','2','filled_rectangle',2,2,'filled_diamond',4];
let expectedOut = [{pattern: 'filled_rectangle', width: 2, height: 2, index: 3}, 
                   {pattern: 'filled_diamond', width: 4, index:5}, {isMirror: false, isFlip: false}];
assert.deepEqual(groupArguments(userInput), expectedOut);

console.log("All Test Passed.")

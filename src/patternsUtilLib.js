const categorizeArguments = function(arguments){
  if(arguments[4] == undefined){
    arguments.push(arguments[3]);
  }
  return {
    type: arguments[2],
    width: +arguments[3],
    height: +arguments[4],
  }
}

const arrangeRectArg = function(arguments, index){
  return {
    pattern: arguments[index++],
    width: arguments[index++],
    height: arguments[index++],
    index: index++
  };
}

const arrangeTriArg = function(arguments, index){
  return {
    pattern: arguments[index++],
    width: arguments[index++],
    index: index,
  };
}

const arrangeDiaArg = function(arguments, index){
  return {
    pattern: arguments[index++],
    width: arguments[index++],
    index: index,
  };
}

const isMirror = function(arguments){
  return arguments[2] == 'mirror';
}

const isFlip = function(arguments){
  return arguments[2] == 'flip';
}

const flipPattern = function(patetrn){
  return patetrn.map(function(line){
    return line.split('').reverse().join('');
  });
}

const mirrorPattern = function(pattern){
  return pattern.reverse();
}

const justifyLineRight = function(text, index, triangle){
  let numberOfspaces = triangle.length - text.length;
  let space = drawLine(' ',numberOfspaces);
  return space + text;
}

const justifyLineLeft = function(text, index, triangle){
  let numberOfspaces = triangle.length - text.length;
  let space = drawLine(' ',numberOfspaces);
  return text + space;
}

const fillWithStar = function(times){
  let line = new Array(times).fill('*');
  return line.join('');
}

const fillWithSpace = function(times){
  let line = new Array(times).fill(' ');
  return line.join('');
}

const fillSpaceEndWithStar = function(times){
  let line = new Array(times).fill(' ');
  return line.join('')+'*';
}

const drawLine = function(symbol, length){
  let line = new Array(length).fill(symbol);
  return line.join('');
}


const generateLine = function(symbol, length){
  let line = new Array(length+1).fill(symbol);
  return line.join('');
}

const groupArguments = function(arguments){
  let actualArguments = arguments.slice(2);
  let flipStatus = isFlip(arguments);
  let mirrorStatus = isMirror(arguments);
  if(flipStatus || mirrorStatus){
    actualArguments = arguments.slice(3);
  }
  return groupArgumentsHelper(actualArguments, 0, flipStatus, mirrorStatus);
}

const groupArgumentsHelper = function(actualArguments, index, flipStatus, mirrorStatus){
  let categorizedArgList = [];
  let categories = {
    rectangle: arrangeRectArg,
    triangle: arrangeTriArg,
    diamond: arrangeDiaArg
  }
  while(actualArguments[index]){
    let type = actualArguments[index].split('_');
    let patternType = type[1];
    categorizedArgList.push(categories[patternType](actualArguments, index));
    index = categorizedArgList[categorizedArgList.length-1].index;
  }
  categorizedArgList.push({isMirror: mirrorStatus, isFlip: flipStatus});
  return categorizedArgList;
}

exports.fillWithStar = fillWithStar;
exports.fillWithSpace = fillWithSpace;
exports.fillSpaceEndWithStar = fillSpaceEndWithStar;
exports.drawLine = drawLine;
exports.categorizeArguments = categorizeArguments;
exports.generateLine = generateLine;
exports.justifyLineRight = justifyLineRight;
exports.groupArguments = groupArguments;
exports.justifyLineLeft = justifyLineLeft;
exports.isFlip = isFlip;
exports.isMirror = isMirror;
exports.flipPattern = flipPattern;
exports.mirrorPattern = mirrorPattern;

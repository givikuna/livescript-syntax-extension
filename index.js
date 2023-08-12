// Generated by LiveScript 1.6.0
(function(){
  var readlineSync, fs, path, _, ref$, filter, empty, floor, isItNaN, flatten, dir, currentDir, len, print, isNumeric, haveMatchingValues, hasMatchingValuesWith, doesNotHaveMatchingValuesWith, occurs, occursIn, countOccurances, countOccurancesIn, occursMoreThan, occursLessThan, lower, upper, ONCE, nothing, NOTHING, moreThan, lessThan, isMoreThan, isLessThan, noMoreThan, noLessThan, isNoMoreThan, isNoLessThan, supertrim, stringToNumber, int, isJSON, isArray, equals, equalsAny, isNotBlank, isBlank, bool, booleanToString, boolString, str, random, scrambleArray, input, readFile, readDir, isFile, isDir, exists, readDirectories, readFiles, countDirectories, countFiles, strToTitle, title, roundToXDigits, toDecimal, toBinary, toHex, transpose, chunk, makeFunctionName, defun, lambda;
  readlineSync = require('readline-sync');
  fs = require('fs');
  path = require('path');
  _ = require('lodash');
  ref$ = require('prelude-ls'), filter = ref$.filter, empty = ref$.empty, floor = ref$.floor, isItNaN = ref$.isItNaN, flatten = ref$.flatten;
  dir = function(){
    return fs.readdirSync(process.cwd());
  };
  currentDir = function(){
    return process.cwd();
  };
  len = function(it){
    return it.length;
  };
  print = console.log;
  isNumeric = function(it){
    return /^[-+]?\d+(\.\d+)?$/.test(it);
  };
  haveMatchingValues = function(arr1, arr2){
    var i$, len$, el1, j$, len1$, el2;
    for (i$ = 0, len$ = arr1.length; i$ < len$; ++i$) {
      el1 = arr1[i$];
      for (j$ = 0, len1$ = arr2.length; j$ < len1$; ++j$) {
        el2 = arr2[j$];
        if (equals(el1, el2)) {
          return true;
        }
      }
    }
    return false;
  };
  hasMatchingValuesWith = haveMatchingValues;
  doesNotHaveMatchingValuesWith = function(arr1, arr2){
    return !hasMatchingValuesWith(arr1, arr2);
  };
  occurs = function(){
    return isMoreThan(countOccurances.apply(this, arguments), 0);
  };
  occursIn = occurs;
  countOccurances = function(key, item){
    var count, i;
    count = 0;
    if (Array.isArray(item)) {
      i = 0;
      while (i < len(item)) {
        if (!Array.isArray(key) && Array.isArray(item[i])) {
          count += countOccurencesOf(item, key);
        }
        if (equals(item[i], key)) {
          count++;
        }
      }
    }
    if (typeof item === 'string' && typeof key === 'string' || typeof key === 'number' || typeof key === 'boolean') {
      key = str(key);
      count = item.split(key).length - 1;
    }
    return count;
  };
  countOccurancesIn = countOccurances;
  occursMoreThan = function(key, item, count){
    return countOccurances(key, item) > count;
  };
  occursLessThan = function(key, item, count){
    return countOccurances(key, item) < count;
  };
  lower = function(it){
    var i$, len$, el;
    if (typeof it === 'string') {
      return it.toLowerCase();
    }
    if (typeof Array.isArray(it)) {
      for (i$ = 0, len$ = it.length; i$ < len$; ++i$) {
        el = it[i$];
        if (typeof el === 'string' || Array.isArray(el)) {
          it[it.indexOf(el)] = lower(el);
        }
      }
      return it;
    }
    return it;
  };
  upper = function(it){
    var i$, len$, el;
    if (typeof it === 'string') {
      return it.toUpperCase();
    }
    if (typeof Array.isArray(it)) {
      for (i$ = 0, len$ = it.length; i$ < len$; ++i$) {
        el = it[i$];
        if (typeof el === 'string') {
          it[it.indexOf(el)] = upper(el);
        }
      }
      return it;
    }
    return it;
  };
  ONCE = 1;
  nothing = null;
  NOTHING = nothing;
  moreThan = function(el1, el2){
    return el1 > el2;
  };
  lessThan = function(el1, el2){
    return el1 < el2;
  };
  isMoreThan = moreThan;
  isLessThan = lessThan;
  noMoreThan = function(a, b){
    return a < b || a === b;
  };
  noLessThan = function(a, b){
    return a > b || a === b;
  };
  isNoMoreThan = noMoreThan;
  isNoLessThan = noLessThan;
  supertrim = function(it){
    return it.replace(/\r?\n|\r/g, '').trim();
  };
  stringToNumber = function(it){
    var style, e;
    if (typeof it !== 'string' || /^\d+[a-zA-Z]*$/.test(it === false) || countOccurances('-', it > 0) && !it.startsWith('-')) {
      return 0;
    }
    it = supertrim(it);
    style = function(inputString){
      if (countOccurances('.', inputString) > 1 && countOccurances(',', inputString) < 2 && countOccurances('_', inputString) === 0) {
        return 'european';
      }
      if (countOccurances(',', inputString) > 1 && countOccurances('.', inputString) < 2 && countOccurances('_', inputString) === 0) {
        return 'american';
      }
      if (countOccurances(',', inputString) > 0 && !occurs('.', inputString)) {
        return 'weird-pythonic';
      }
      return 'pythonic';
    }(it);
    try {
      return Number(function(givenStyle, givenString){
        var returnString;
        returnString = '';
        if (givenStyle === 'pythonic') {
          returnString = givenString.replace(/_/g, '');
        }
        if (givenStyle === 'european') {
          returnString = givenString.replace(/\./g, '').replace(/,/, '.');
        }
        if (givenStyle === 'american') {
          returnString = givenString.replace(/,/g, '');
        }
        if (givenStyle === 'weird-pythonic') {
          returnString = givenString.replace(/_/g, '').replace(/,/, '.');
        }
        return returnString.replace(/[A-Za-z]/g, '');
      }(style, it));
    } catch (e$) {
      e = e$;
      return 0;
    }
  };
  int = function(it){
    var e;
    try {
      if (typeof it === 'number') {
        return Math.floor(it);
      }
      if (typeof it === 'string') {
        if (isNumeric(it)) {
          return parseInt(it, 10);
        }
        return int(stringToNumber(it));
      }
      return Number(it);
    } catch (e$) {
      e = e$;
      return 0;
    }
  };
  isJSON = function(it){
    var err, e;
    try {
      if (typeof it === 'string') {
        try {
          JSON.parse(it);
          return true;
        } catch (e$) {
          err = e$;
          return false;
        }
      }
      if (typeof it === 'Object') {
        try {
          if (Array.isArray(it)) {
            return true;
          }
          if (Array.isArray(JSON.parse(JSON.stringify(it)))) {
            return true;
          }
          return true;
        } catch (e$) {
          err = e$;
          return false;
        }
      }
    } catch (e$) {
      e = e$;
      false;
    }
    return false;
  };
  isArray = function(it){
    return Array.isArray(it) || isJSON(it) || it instanceof Array || it instanceof JSON;
  };
  equals = function(val1, val2){
    var i, i$, len$, key, e;
    try {
      if (val1 === val2) {
        return true;
      }
      if (deepEquals(val1, val2)) {
        return true;
      }
      if (typeof val1 !== typeof val2) {
        return false;
      }
      if (Array.isArray(val1 !== Array.isArray(val2))) {
        return false;
      }
      if (len(Object.keys(val1 !== len(Object.keys(val2))))) {
        return false;
      }
      if (Array.isArray(val1) && Array.isArray(val2)) {
        i = 0;
        while (i < len(val1)) {
          if (!deepEquals(val1[i], val2[i])) {
            return false;
          }
        }
      } else {
        for (i$ = 0, len$ = val1.length; i$ < len$; ++i$) {
          key = val1[i$];
          if (!deepEquals(val1[key], val2[key])) {
            return false;
          }
        }
      }
      return true;
    } catch (e$) {
      e = e$;
      return false;
    }
  };
  equalsAny = function(key, arr){
    var i$, ref$, len$, el;
    if (in$(key, arr)) {
      return true;
    }
    for (i$ = 0, len$ = (ref$ = flatten(arr)).length; i$ < len$; ++i$) {
      el = ref$[i$];
      if (equals(key, el)) {
        return true;
      }
    }
    return false;
  };
  isNotBlank = function(it){
    if (equalsAny(it, [null, undefined, "", {}, []]) || empty(it)) {
      return true;
    }
    return false;
  };
  isBlank = function(it){
    return !isNotBlank(it);
  };
  bool = function(it){
    if (it === 'true') {
      return 'true';
    }
    if (it === 'false') {
      return 'false';
    }
    return it;
  };
  booleanToString = function(it){
    if (it) {
      return 'true';
    }
    return 'false';
  };
  boolString = function(it){
    if (it === 'true' || it === 'false' || it === 'on' || it === 'off' || it === 'yes' || it === 'no') {
      return true;
    } else {
      return false;
    }
  };
  str = function(it){
    var e;
    if (isJSON(it) || it instanceof Array) {
      return JSON.stringify(it);
    }
    if (typeof it === 'string') {
      return it;
    }
    if (typeof it === 'undefined') {
      return 'undefined';
    }
    if (it === null) {
      return 'null';
    }
    if (isItNaN(it)) {
      return 'NaN';
    }
    if (typeof it === 'boolean' && boolString(it)) {
      return booleanToString(it);
    }
    try {
      return String(it);
    } catch (e$) {
      e = e$;
      return "";
    }
  };
  random = function(minVal, maxVal){
    return (function(it){
      return it + minVal;
    })(Math.random() * (minVal - maxVal));
  };
  scrambleArray = function(it){
    var arr, n, i$, i, j, temp;
    if (!(it instanceof Array)) {
      return [];
    }
    arr = it.slice();
    n = len(arr);
    for (i$ = n - 1; i$ >= 1; --i$) {
      i = i$;
      j = floor((fn$)((fn1$)(i)));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
    function fn$(it){
      return it * Math.random();
    }
    function fn1$(it){
      return it + 1;
    }
  };
  input = function(prompt, changeTo){
    var answer;
    changeTo == null && (changeTo = 'str');
    answer = readlineSync.question(
    prompt);
    if ((changeTo === 'num' || changeTo === 'n' || changeTo === 'number' || changeTo === 'int') && isNumeric(answer)) {
      answer = int(answer);
    }
    if ((changeTo === 'bool' || changeTo === 'boolean' || changeTo === 'b') && boolString(answer)) {
      answer = bool(answer);
    }
    return answer;
  };
  readFile = fs.readFileSync;
  readDir = fs.readdirSync;
  isFile = function(){
    return fs.existsSync.apply(this, arguments) && fs.statSync.apply(this, arguments).isFile();
  };
  isDir = function(){
    return fs.existsSync.apply(this, arguments) && fs.statSync.apply(this, arguments).isDirectory();
  };
  exists = fs.existsSync;
  readDirectories = function(it){
    var e;
    if (!it || isBlank(it)) {
      it = currentDir();
    }
    try {
      return filter(isDir, readDir(it));
    } catch (e$) {
      e = e$;
      return [];
    }
  };
  readFiles = function(it){
    var e;
    if (!it || isBlank(it)) {
      it = currentDir();
    }
    try {
      return filter(isFile, readDir(it));
    } catch (e$) {
      e = e$;
      return [];
    }
  };
  countDirectories = function(it){
    return len(readDirectories(it));
  };
  countFiles = function(it){
    return len(readFiles(it));
  };
  strToTitle = function(it){
    return it.replace(/\b\w/g, function(c){
      return c.toUpperCase();
    });
  };
  title = strToTitle;
  roundToXDigits = function(n, digits){
    digits == null && (digits = 0);
    return Math.round(n * Math.pow(10, digits)) / Math.pow(10, digits);
  };
  toDecimal = function(it){
    return int(str(it, 10));
  };
  toBinary = function(it){
    return str(int(str(it), 2));
  };
  toHex = function(it){
    return str(int(str(it), 16));
  };
  transpose = function(it){
    var rowCount, colCount, transposed, col, row;
    if (!it || len(it === 0) || len(it[0] === 0)) {
      return [];
    }
    rowCount = len(it);
    colCount = len(it[0]);
    transposed = [];
    col = 0;
    while (col < colCount) {
      tranposed[col] = [];
      row = 0;
      while (row < rowCount) {
        transposed[col][row] = it[row][col];
        row++;
      }
      col++;
    }
    return transposed;
  };
  chunk = function(arr, size){
    var chunkedArr, i, chunk;
    size == null && (size = 1);
    chunkedArr = [];
    i = 0;
    while (i < len(arr)) {
      chunk = arr.slice(i, i + size);
      chunkedArr.push(chunk);
    }
    return chunkedArr;
  };
  makeFunctionName = function(it){
    if (it[0] === upper(it[0])) {
      return title(_.camelCase(it));
    }
    return _.camelCase(it);
  };
  defun = function(name, fn){
    return global[makeFunctionName(name)] = fn;
  };
  lambda = function(fn){
    return function(){
      var args, res$, i$, to$;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      return fn.apply(null, args);
    };
  };
  module.exports = {
    lambda: lambda,
    defun: defun,
    len: len,
    print: print,
    dir: dir,
    isNumeric: isNumeric,
    int: int,
    isJSON: isJSON,
    str: str,
    equals: equals,
    bool: bool,
    random: random,
    scrambleArray: scrambleArray,
    input: input,
    readFile: readFile,
    readDir: readDir,
    isFile: isFile,
    isDir: isDir,
    exists: exists,
    countDirectories: countDirectories,
    countFiles: countFiles,
    strToTitle: strToTitle,
    title: title,
    roundToXDigits: roundToXDigits,
    toDecimal: toDecimal,
    toBinary: toBinary,
    toHex: toHex,
    transpose: transpose,
    chunk: chunk,
    currentDir: currentDir,
    isNotBlank: isNotBlank,
    isBlank: isBlank,
    readDirectories: readDirectories,
    readFiles: readFiles,
    haveMatchingValues: haveMatchingValues,
    hasMatchingValuesWith: hasMatchingValuesWith,
    doesNotHaveMatchingValuesWith: doesNotHaveMatchingValuesWith,
    countOccurances: countOccurances,
    moreThan: moreThan,
    lessThan: lessThan,
    occursMoreThan: occursMoreThan,
    occursLessThan: occursLessThan,
    countOccurancesIn: countOccurancesIn,
    occurs: occurs,
    occursIn: occursIn,
    lower: lower,
    upper: upper,
    ONCE: ONCE,
    nothing: nothing,
    NOTHING: nothing,
    stringToNumber: stringToNumber,
    isMoreThan: isMoreThan,
    isLessThan: isLessThan,
    isArray: isArray
  };
  function in$(x, xs){
    var i = -1, l = xs.length >>> 0;
    while (++i < l) if (x === xs[i]) return true;
    return false;
  }
}).call(this);

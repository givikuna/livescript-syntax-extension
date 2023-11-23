// Generated by LiveScript 1.6.0
(function(){
  var execSync, mathjs, Vec, flip, rev, fold, foldl, foldr, fold1, foldl1, foldr1, filter, reject, partition, map, mapcar, str, int, random, lower, upper, inc, dec, supertrim, freq, len, enumerate, member, mem, map2, stringAppend, listRef, hashRef, buildList, title, uniq, memoize, sorted, noop, id, before, after, throttle, debounce, lazy, listTo, listTil, bool, pipe, cond, expt, replaceAll, removeAll, iter, say, indexOf, isNumeric, replace, expm1, trimStart, trimEnd, input, charcode, makeHash, fold0, foldl0, foldr0, transpose, chunk, sleep, lambda, fn, λ, exec, palindrome, foldstr, changeIn, foldt, foldf, factorial, ǃ, comb, nCr, sin, cos, tan, csc, sec, cot, arcsin, arccos, arctan, arccsc, arcsec, toRad, toDeg, dsin, dcos, dtan, dcsc, dsec, dcot, darcsin, darccos, darctan, darccsc, darcsec, darccot, ln, recip, log10, log1p, log2, log, even, odd, signum, E, G, earthMass, earthRadius, ge, gn, g, isNaturalNumber, isInt, summation, Σ, invertMatrix, addMatrix, subtractMatrix, multiplyMatrix, divideMatrix, elementaryCharge, e, C, π, pi, τ, tau, magneticConstant, μ0, vacuumPermittivity, ε0, Ke, electronMass, protonMass, me, mp, mα, alphaParticleMass, Qα, alphaParticleCharge, abs, floor, ceil, sqrt, cbrt, gcd, gcf, lcm, append, listAppend, ƒ, ǀ, ǁ, Δ, difference, ϵ, ᐡ, union, ᐢ, intersection, ᑦ, properSubset, ᐣ, properSuperset, negate, neg, ᐨ, ᕀ, Ɩ, to_set, Ø, p, makeLegalJSName, out$ = typeof exports != 'undefined' && exports || this, toString$ = {}.toString, slice$ = [].slice, arrayFrom$ = Array.from || function(x){return slice$.call(x);};
  execSync = require('child_process').execSync;
  mathjs = require('mathjs');
  out$.Vec = Vec = require('./Vec').Vec;
  out$.flip = flip = curry$(function(f, x, y){
    return f(y, x);
  });
  out$.rev = rev = compose$(Array.from, function(it){
    return it.reverse();
  });
  out$.fold = fold = curry$(function(f, z, xs){
    var memo, i$, len$, x;
    memo = z;
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      memo = f(memo, x);
    }
    return memo;
  });
  out$.foldl = foldl = fold;
  out$.foldr = foldr = curry$(function(f, z, xs){
    return foldl(f, z, rev(xs));
  });
  out$.fold1 = fold1 = curry$(function(f, xs){
    return fold(f, 1, xs);
  });
  out$.foldl1 = foldl1 = fold1;
  out$.foldr1 = foldr1 = curry$(function(f, xs){
    return foldr1(f, rev(xs));
  });
  out$.filter = filter = curry$(function(f, xs){
    var i$, len$, x, results$ = [];
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      if (f(x)) {
        results$.push(x);
      }
    }
    return results$;
  });
  out$.reject = reject = curry$(function(f, xs){
    return flip(filter)(xs, compose$(f, not$));
  });
  out$.partition = partition = curry$(function(f, xs){
    return [filter(f, xs), reject(f, xs)];
  });
  out$.map = map = curry$(function(f, xs){
    var i$, len$, x, results$ = [];
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      results$.push(f(x));
    }
    return results$;
  });
  out$.mapcar = mapcar = curry$(function(f, xs){
    var i$, len$, x, results$ = [];
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      results$.push(f(x));
    }
    return results$;
  });
  out$.str = str = function(s){
    if (toString$.call(s).slice(8, -1) === 'Array' || Array.isArray(s) || s instanceof Array) {
      return JSON.stringify(s);
    } else if (typeof s === 'boolean') {
      return function(b){
        if (b) {
          return true;
        } else {
          return false;
        }
      }(
      s);
    } else if (typeof s === 'null') {
      return 'null';
    } else if (typeof s === 'undefined') {
      return 'undefined';
    } else {
      return String(s);
    }
  };
  out$.int = int = function(n){
    if (typeof n === 'number') {
      return Math.floor(n);
    } else {
      return Math.floor(Number(n));
    }
  };
  out$.random = random = curry$(function(minVal, maxVal){
    if (minVal >= maxVal) {
      return minVal;
    }
    return (function(it){
      return it + minVal;
    })(
    Math.floor(
    (function(it){
      return it * Math.random();
    })(
    (function(it){
      return it - minVal;
    })(
    maxVal))));
  });
  out$.lower = lower = function(it){
    return it.toLowerCase();
  };
  out$.upper = upper = function(it){
    return it.toUpperCase();
  };
  out$.inc = inc = (function(it){
    return it + 1;
  });
  out$.dec = dec = (function(it){
    return it - 1;
  });
  out$.supertrim = supertrim = compose$(function(it){
    return it.replace(/\r?\n|\r/g, '');
  }, function(it){
    return it.trim();
  });
  out$.freq = freq = curry$(function(k, xs){
    return xs.filter((function(it){
      return it === k;
    })).length;
  });
  out$.len = len = function(it){
    return it.length;
  };
  out$.enumerate = enumerate = function(it){
    return it.entries();
  };
  out$.member = member = curry$(function(k, xs){
    return in$(k, xs);
  });
  out$.mem = mem = member;
  out$.map2 = map2 = curry$(function(f, xs, ys){
    return xs.map(function(x, i){
      return f(x, ys[i]);
    });
  });
  out$.stringAppend = stringAppend = curry$(function(s1, s2){
    return s1 + s2;
  });
  out$.listRef = listRef = curry$(function(i, xs){
    if (curry$(function(x$, y$){
      return x$ > y$;
    })(0, n)) {
      return xs[xs.length + n];
    } else {
      return xs[n];
    }
  });
  out$.hashRef = hashRef = curry$(function(k, xs){
    return xs[k];
  });
  out$.buildList = buildList = curry$(function(n, f){
    return (function(){
      var i$, to$, results$ = [];
      for (i$ = 0, to$ = n; i$ < to$; ++i$) {
        results$.push(i$);
      }
      return results$;
    }()).map(f);
  });
  out$.title = title = function(s){
    return (function(it){
      return it + s.slice(1);
    })(
    function(it){
      return it.toUpperCase();
    }(
    function(it){
      return it.charAt(0);
    }(
    s)));
  };
  out$.uniq = uniq = function(xs){
    return arrayFrom$(new Set(xs));
  };
  out$.memoize = memoize = function(f){
    var cache;
    cache = {};
    return function(){
      var args, res$, i$, to$, res;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      if (in$(args[0], cache)) {
        return cache[args[0]];
      }
      res = f(args[0]);
      cache[n] = res;
      return res;
    };
  };
  out$.sorted = sorted = function(xs){
    var mid, l, r;
    if (xs.length <= 1) {
      return xs;
    }
    mid = Math.floor(
    (function(it){
      return it / 2;
    })(
    arr.length));
    l = sorted(arr.slice(0, mid));
    r = sorted(arr.slice(mid));
    return function(l2, r2){
      var a;
      a = [];
      while (l2.length && r2.length) {
        if (l2[0] < r2[0]) {
          a.push(l.shift());
        } else {
          a.push(r.shift());
        }
      }
      return arrayFrom$(a).concat(arrayFrom$(l), arrayFrom$(r));
    }(l, r);
  };
  out$.noop = noop = function(){
    null;
  };
  out$.id = id = function(it){
    return it;
  };
  out$.before = before = curry$(function(beforeFunc, func){
    return function(){
      var args, res$, i$, to$;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      beforeFunc();
      return func.apply(null, args);
    };
  });
  out$.after = after = curry$(function(func, afterFunc){
    return function(){
      var args, res$, i$, to$, result;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      result = func.apply(null, args);
      afterFunc();
      return result;
    };
  });
  out$.throttle = throttle = function(func, delay){
    var lastTime;
    lastTime = 0;
    return function(){
      var args, res$, i$, to$, currentTime, lastTime;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      currentTime = Date.now();
      if (currentTime - lastTime >= delay) {
        func.apply(this, args);
        lastTime = currentTime;
      }
    };
  };
  out$.debounce = debounce = function(func, delay){
    var timeoutId;
    timeoutId = null;
    return function(){
      var args, res$, i$, to$, timeoutId;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function(){
        return func.apply(null, args);
      }, delay);
    };
  };
  out$.lazy = lazy = function(f){
    var evaluated, result;
    evaluated = false;
    result = null;
    return function(){
      var args, res$, i$, to$, result, evaluated;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      if (!evaluated) {
        result = func.apply(null, args);
        evaluated = true;
      }
      return result;
    };
  };
  out$.listTo = listTo = curry$(function(x, y){
    var i$, results$ = [];
    for (i$ = x; i$ <= y; ++i$) {
      results$.push(i$);
    }
    return results$;
  });
  out$.listTil = listTil = curry$(function(x, y){
    var i$, results$ = [];
    for (i$ = x; i$ < y; ++i$) {
      results$.push(i$);
    }
    return results$;
  });
  out$.bool = bool = Boolean;
  out$.pipe = pipe = function(x){
    var fs, res$, i$, to$, y, len$, f;
    res$ = [];
    for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
      res$.push(arguments[i$]);
    }
    fs = res$;
    y = x;
    for (i$ = 0, len$ = fs.length; i$ < len$; ++i$) {
      f = fs[i$];
      y = f(y);
    }
    return y;
  };
  out$.cond = cond = function(){
    var conditions, res$, i$, to$, len$, condition;
    res$ = [];
    for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
      res$.push(arguments[i$]);
    }
    conditions = res$;
    for (i$ = 0, len$ = conditions.length; i$ < len$; ++i$) {
      condition = conditions[i$];
      if (condition[0] === true) {
        if (condition[1] instanceof Function) {
          return condition[1]();
        } else {
          return condition[1];
        }
      }
    }
    if (conditions[conditions.length - 1] === 'else') {
      return conditions[conditions.length - 1][1];
    }
    return null;
  };
  out$.expt = expt = flip(Math.pow);
  out$.replaceAll = replaceAll = curry$(function(x1, x2, xs){
    return xs.replaceAll(x1, x2);
  });
  out$.removeAll = removeAll = curry$(function(x, xs){
    return xs.replaceAll(x, '');
  });
  out$.iter = iter = function(it){
    return it.values();
  };
  out$.say = say = console.log;
  out$.indexOf = indexOf = curry$(function(x, xs){
    return xs.indexOf(x);
  });
  out$.isNumeric = isNumeric = /^[-+]?\d+(\.\d+)?$/.test;
  out$.replace = replace = curry$(function(x1, x2, xs){
    return xs.replace(x1, x2);
  });
  out$.expm1 = expm1 = Math.expm1;
  out$.trimStart = trimStart = function(it){
    return it.trimStart();
  };
  out$.trimEnd = trimEnd = function(it){
    return it.trimEnd();
  };
  out$.input = input = require('readline-sync').question;
  out$.charcode = charcode = function(it){
    return it.charCodeAt(0);
  };
  out$.makeHash = makeHash = function(xs){
    var obj;
    obj = {};
    xs.forEach(function(x){
      return obj[x[0]] = x[1];
    });
    return obj;
  };
  out$.fold0 = fold0 = curry$(function(f, xs){
    return fold(f, 0, xs);
  });
  out$.foldl0 = foldl0 = fold0;
  out$.foldr0 = foldr0 = curry$(function(f, xs){
    return foldr(f, 0, xs);
  });
  out$.transpose = transpose = function(arr){
    var rowCount, colCount, transposedArr, col, row;
    if (!arr || arr.length === 0 || arr[0].length === 0) {
      return [];
    }
    rowCount = arr.length;
    colCount = arr[0].length;
    transposedArr = [];
    col = 0;
    while (col < colCount) {
      transposedArr[col] = [];
      row = 0;
      while (row < rowCount) {
        transposedArr[col][row] = arr[row][col];
        row += 1;
      }
      col += 1;
    }
    return transposedArr;
  };
  out$.chunk = chunk = curry$(function(arr, size){
    var chunkedArr, i, chunk_;
    chunkedArr = [];
    i = 0;
    while (i < arr.length) {
      chunk_ = arr.slice(i, i + size);
      chunkedArr.push(chunk);
      i += 1;
    }
    return chunkedArr;
  });
  out$.sleep = sleep = function(amount, type){
    var multiplier, start;
    type == null && (type = 'milliseconds');
    multiplier = function(){
      if (type === 'seconds') {
        return 1000;
      }
      if (type === 'hours') {
        return 3600000;
      }
      if (type === 'days') {
        return 86400000;
      }
      return 1;
    }();
    start = new Date().getTime();
    while (new Date().getTime() - start < multiplier * amount) {
      null;
    }
  };
  out$.lambda = lambda = function(f){
    return function(){
      var args, res$, i$, to$;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      return f.apply(null, args);
    };
  };
  out$.fn = fn = lambda;
  out$.λ = λ = lambda;
  out$.exec = exec = execSync;
  out$.expm1 = expm1 = Math.expm1;
  out$.palindrome = palindrome = function(s){
    return s === rev(s);
  };
  out$.foldstr = foldstr = curry$(function(f, xs){
    return fold(f, '', xs);
  });
  out$.changeIn = changeIn = curry$(function(f, i){
    if (typeof f === 'number') {
      return f - i;
    } else {
      return f[0] - f[1];
    }
  });
  out$.foldt = foldt = curry$(function(f, xs){
    return fold(true, '', xs);
  });
  out$.foldf = foldf = curry$(function(f, xs){
    return fold(false, '', xs);
  });
  out$.factorial = factorial = function(n){
    if (n < 0 || n.toString().split('').includes('.')) {
      return mathjs.gamma(n);
    }
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(dec(n));
    }
  };
  out$.ǃ = ǃ = factorial;
  out$.comb = comb = curry$(function(n, k){
    return ǃ(n) / (ǃ(n - k) * ǃ(k));
  });
  out$.nCr = nCr = comb;
  out$.sin = sin = Math.sin;
  out$.cos = cos = Math.cos;
  out$.tan = tan = Math.tan;
  out$.csc = csc = compose$((function(it){
    return 1 / it;
  }), Math.sin);
  out$.sec = sec = compose$((function(it){
    return 1 / it;
  }), Math.cos);
  out$.cot = cot = compose$((function(it){
    return 1 / it;
  }), Math.tan);
  out$.arcsin = arcsin = Math.asin;
  out$.arccos = arccos = Math.acos;
  out$.arctan = arctan = Math.atan;
  out$.arccsc = arccsc = compose$((function(it){
    return 1 / it;
  }), Math.asin);
  out$.arcsec = arcsec = compose$((function(it){
    return 1 / it;
  }), Math.acos);
  out$.arctan = arctan = compose$((function(it){
    return 1 / it;
  }), Math.atan);
  out$.toRad = toRad = compose$((function(it){
    return it * Math.PI;
  }), (function(it){
    return it / 180.0;
  }));
  out$.toDeg = toDeg = compose$((function(it){
    return it * 180.0;
  }), (function(it){
    return it / Math.PI;
  }));
  out$.dsin = dsin = compose$(toRad, Math.sin);
  out$.dcos = dcos = compose$(toRad, Math.cos);
  out$.dtan = dtan = compose$(toRad, Math.tan);
  out$.dcsc = dcsc = compose$(toDeg, (function(it){
    return 1 / it;
  }), Math.sin);
  out$.dsec = dsec = compose$(toDeg, (function(it){
    return 1 / it;
  }), Math.cos);
  out$.dcot = dcot = compose$(toDeg, (function(it){
    return 1 / it;
  }), Math.tan);
  out$.darcsin = darcsin = compose$(Math.asin, toDeg);
  out$.darccos = darccos = compose$(Math.acos, toDeg);
  out$.darctan = darctan = compose$(Math.atan, toDeg);
  out$.darccsc = darccsc = compose$((function(it){
    return 1 / it;
  }), Math.asin, toDeg);
  out$.darcsec = darcsec = compose$((function(it){
    return 1 / it;
  }), Math.acos, toDeg);
  out$.darccot = darccot = compose$((function(it){
    return 1 / it;
  }), Math.atan, toDeg);
  out$.ln = ln = Math.log;
  out$.recip = recip = (function(it){
    return 1 / it;
  });
  out$.log10 = log10 = Math.log10;
  out$.log1p = log1p = Math.log1p;
  out$.log2 = log2 = Math.log2;
  out$.log = log = curry$(function(base, n){
    return Math.log(n) / Math.log(base);
  });
  out$.even = even = compose$((function(it){
    return it % 2;
  }), (function(it){
    return it === 0;
  }));
  out$.odd = odd = compose$((function(it){
    return it % 2;
  }), (function(it){
    return it !== 0;
  }));
  out$.signum = signum = function(){
    if (curry$(function(x$, y$){
      return x$ > y$;
    })(0, x)) {
      return -1;
    } else if (curry$(function(x$, y$){
      return x$ < y$;
    })(0, x)) {
      return 1;
    } else {
      return 0;
    }
  };
  out$.E = E = curry$(function(n, ex){
    return n * Math.pow(10, ex);
  });
  out$.G = G = E(6.67384, -11);
  out$.earthMass = earthMass = E(5.97219, 24);
  out$.earthRadius = earthRadius = 6378100;
  out$.ge = ge = (G * earthMass) / Math.pow(earthRadius, 2);
  out$.gn = gn = 9.807;
  out$.g = g = gn;
  out$.isNaturalNumber = isNaturalNumber = function(n){
    return n > 0 && Number.isInteger(n);
  };
  out$.isInt = isInt = Number.isInteger;
  out$.summation = summation = curry$(function(n, i, f){
    var x;
    return fold0(curry$(function(x$, y$){
      return x$ + y$;
    }), (function(){
      var i$, ref$, len$, results$ = [];
      for (i$ = 0, len$ = (ref$ = (fn$())).length; i$ < len$; ++i$) {
        x = ref$[i$];
        results$.push(f(x));
      }
      return results$;
      function fn$(){
        var i$, to$, results$ = [];
        for (i$ = i, to$ = n; i$ <= to$; ++i$) {
          results$.push(i$);
        }
        return results$;
      }
    }()));
  });
  out$.Σ = Σ = function(it){
    return foldl0(curry$(function(x$, y$){
      return x$ + y$;
    }), it);
  };
  out$.invertMatrix = invertMatrix = mathjs.inv;
  out$.addMatrix = addMatrix = curry$(function(xs, ys){
    return xs.map(function(a, i){
      return a.map(function(x, j){
        return x + ys[i][j];
      });
    });
  });
  out$.subtractMatrix = subtractMatrix = curry$(function(xs, ys){
    return xs.map(function(a, i){
      return a.map(function(x, j){
        return x - ys[i][j];
      });
    });
  });
  out$.multiplyMatrix = multiplyMatrix = curry$(function(A, B){
    var C, res$, i$, len$, a, lresult$, j$, ref$, len1$, b, i, ref1$, j, fn2$ = curry$(function(x$, y$){
      return x$ + y$;
    });
    if (len(A[0] !== len(B))) {
      throw new Error('length of A[0] must equal length of B');
    }
    res$ = [];
    for (i$ = 0, len$ = A.length; i$ < len$; ++i$) {
      a = A[i$];
      lresult$ = [];
      for (j$ = 0, len1$ = (ref$ = B[0]).length; j$ < len1$; ++j$) {
        b = ref$[j$];
        lresult$.push(0);
      }
      res$.push(lresult$);
    }
    C = res$;
    for (i$ = 0, len$ = (ref$ = (fn$())).length; i$ < len$; ++i$) {
      i = ref$[i$];
      for (j$ = 0, len1$ = (ref1$ = (fn1$())).length; j$ < len1$; ++j$) {
        j = ref1$[j$];
        C[i][j] = fold0(fn2$, A[i].map(fn3$));
      }
    }
    return C;
    function fn$(){
      var i$, to$, results$ = [];
      for (i$ = 0, to$ = len(A); i$ < to$; ++i$) {
        results$.push(i$);
      }
      return results$;
    }
    function fn1$(){
      var i$, to$, results$ = [];
      for (i$ = 0, to$ = len(B[0]); i$ < to$; ++i$) {
        results$.push(i$);
      }
      return results$;
    }
    function fn3$(a, k){
      return a * B[k][j];
    }
  });
  out$.divideMatrix = divideMatrix = curry$(function(A, B){
    return multiplyMatrix(A, invertMatrix(b));
  });
  out$.elementaryCharge = elementaryCharge = E(1.602176634, -19);
  out$.e = e = Math.E;
  out$.C = C = 299792458;
  out$.π = π = Math.PI;
  out$.pi = pi = Math.PI;
  out$.τ = τ = curry$(function(x$, y$){
    return x$ * y$;
  })(2, π);
  out$.tau = tau = τ;
  out$.magneticConstant = magneticConstant = E(curry$(function(x$, y$){
    return x$ * y$;
  })(4, π), -7);
  out$.μ0 = μ0 = magneticConstant;
  out$.vacuumPermittivity = vacuumPermittivity = recip(μ0 * Math.pow(C, 2));
  out$.ε0 = ε0 = vacuumPermittivity;
  out$.Ke = Ke = recip(4 * π * ε0);
  out$.electronMass = electronMass = E(9.1093837015, -31);
  out$.protonMass = protonMass = E(1.67262192, -27);
  out$.me = me = electronMass;
  out$.mp = mp = protonMass;
  out$.mα = mα = curry$(function(x$, y$){
    return x$ * y$;
  })(4, protonMass);
  out$.alphaParticleMass = alphaParticleMass = mα;
  out$.Qα = Qα = curry$(function(x$, y$){
    return x$ * y$;
  })(2, elementaryCharge);
  out$.alphaParticleCharge = alphaParticleCharge = Qα;
  out$.abs = abs = Math.abs;
  out$.floor = floor = Math.floor;
  out$.ceil = ceil = Math.ceil;
  out$.sqrt = sqrt = Math.sqrt;
  out$.cbrt = cbrt = Math.cbrt;
  out$.gcd = gcd = curry$(function(n, m){
    var tmp;
    while (m) {
      tmp = m;
      m = n % m;
      n = tmp;
    }
    return Math.abs(n);
  });
  out$.gcf = gcf = gcd;
  out$.lcm = lcm = curry$(function(n, m){
    return (n * m) / gcd(n, m);
  });
  out$.append = append = curry$(function(x$, y$){
    return x$.concat(y$);
  });
  out$.listAppend = listAppend = append;
  out$.stringAppend = stringAppend = curry$(function(x$, y$){
    return x$ + y$;
  });
  out$.ƒ = ƒ = lambda;
  out$.ǀ = ǀ = len;
  out$.ǁ = ǁ = Math.abs;
  out$.Δ = Δ = curry$(function(xs, ys){
    var x, y;
    return uniq(curry$(function(x$, y$){
      return x$.concat(y$);
    })((function(){
      var i$, ref$, len$, results$ = [];
      for (i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$) {
        x = ref$[i$];
        if (!in$(x, ys)) {
          results$.push(x);
        }
      }
      return results$;
    }()), (function(){
      var i$, ref$, len$, results$ = [];
      for (i$ = 0, len$ = (ref$ = ys).length; i$ < len$; ++i$) {
        y = ref$[i$];
        if (!in$(y, xs)) {
          results$.push(y);
        }
      }
      return results$;
    }())));
  });
  out$.difference = difference = Δ;
  out$.ϵ = ϵ = curry$(function(x, xs){
    return in$(x, xs);
  });
  out$.ᐡ = ᐡ = compose$(curry$(function(x$, y$){
    return x$.concat(y$);
  }), uniq);
  out$.union = union = ᐡ;
  out$.ᐢ = ᐢ = curry$(function(xs, ys){
    var x, y;
    return uniq(curry$(function(x$, y$){
      return x$.concat(y$);
    })((function(){
      var i$, ref$, len$, results$ = [];
      for (i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$) {
        x = ref$[i$];
        if (in$(x, ys)) {
          results$.push(x);
        }
      }
      return results$;
    }()), (function(){
      var i$, ref$, len$, results$ = [];
      for (i$ = 0, len$ = (ref$ = ys).length; i$ < len$; ++i$) {
        y = ref$[i$];
        if (in$(y, xs)) {
          results$.push(y);
        }
      }
      return results$;
    }())));
  });
  out$.intersection = intersection = ᐢ;
  out$.ᑦ = ᑦ = curry$(function(xs, ys){
    var xsu, ysu, x;
    xsu = uniq(xs);
    ysu = uniq(ys);
    return ϵ(true, (function(){
      var i$, ref$, len$, results$ = [];
      for (i$ = 0, len$ = (ref$ = xsu).length; i$ < len$; ++i$) {
        x = ref$[i$];
        results$.push(ϵ(x, ysu));
      }
      return results$;
    }()));
  });
  out$.properSubset = properSubset = ᑦ;
  out$.ᐣ = ᐣ = flip(ᑦ);
  out$.properSuperset = properSuperset = ᐣ;
  out$.negate = negate = function(it){
    if (curry$(function(x$, y$){
      return x$ < y$;
    })(0, it)) {
      return -it;
    } else {
      return it;
    }
  };
  out$.neg = neg = negate;
  out$.ᐨ = ᐨ = neg;
  out$.ᕀ = ᕀ = function(it){
    if (curry$(function(x$, y$){
      return x$ > y$;
    })(0, it)) {
      return -it;
    } else {
      return it;
    }
  };
  out$.Ɩ = Ɩ = Math.floor;
  out$.to_set = to_set = new Set;
  out$.Ø = Ø = compose$(len, (function(it){
    return it < 1;
  }));
  out$.p = p = console.log;
  makeLegalJSName = function(s){
    var name;
    name = s.replace(/\r?\n|\r/g, '').trim();
    if (/^[a-zA-Z0-9]+$/.test(name)) {
      return name;
    }
    if (name[0] === name[0].toUpperCase()) {
      return lodash.camelCase(name).replace(/\b\w/g, function(c){
        return c.toUpperCase();
      });
    }
    return lodash.camelCase(name);
  };
  out$.defun = defun;
  function defun(name, func){
    if (global.hasOwnProperty(name)) {
      return null;
    }
    if (!func) {
      global[makeLegalJSName(name)] = null;
      return global[makeLegalJSName(name)];
    }
    global[makeLegalJSName(name)] = func;
    return func;
  }
  out$.define = define;
  function define(name, val){
    if (global.hasOwnProperty(name)) {
      return global['name'];
    }
    if (!val) {
      global[makeLegalJSName(name)] = null;
      return global[makeLegalJSName(name)];
    }
    global[makeLegalJSName(name)] = val;
    return val;
  }
  out$.defconstant = defconstant;
  function defconstant(name, val){
    if (global.hasOwnProperty(name)) {
      return global['name'];
    }
    if (!val) {
      global[makeLegalJSName(name)] = null;
      return global[makeLegalJSName(name)];
    }
    Object.defineProperty(global, makeLegalJSName(name), {
      value: val,
      writable: false,
      configurable: false
    });
    return val;
  }
  out$.defparameter = defparameter;
  function defparameter(name, val){
    if (global.hasOwnProperty(name)) {
      return null;
    }
    return defun(name, val);
  }
  out$.defvar = defvar;
  function defvar(name){
    if (!global.hasOwnProperty(name)) {
      global[name] = undefined;
    }
  }
  out$.defmacro = defmacro;
  function defmacro(name, func){
    return defun(name, func);
  }
  function curry$(f, bound){
    var context,
    _curry = function(args) {
      return f.length > 1 ? function(){
        var params = args ? args.concat() : [];
        context = bound ? context || this : this;
        return params.push.apply(params, arguments) <
            f.length && arguments.length ?
          _curry.call(context, params) : f.apply(context, params);
      } : f;
    };
    return _curry();
  }
  function compose$() {
    var functions = arguments;
    return function() {
      var i, result;
      result = functions[0].apply(this, arguments);
      for (i = 1; i < functions.length; ++i) {
        result = functions[i](result);
      }
      return result;
    };
  }
  function not$(x){ return !x; }
  function in$(x, xs){
    var i = -1, l = xs.length >>> 0;
    while (++i < l) if (x === xs[i]) return true;
    return false;
  }
}).call(this);

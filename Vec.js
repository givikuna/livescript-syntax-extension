"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vec = void 0;
var Vec = /** @class */ (function () {
    function Vec(arr) {
        var is_iter = function (obj) {
            return typeof obj[Symbol.iterator] === "function";
        };
        this.arr = (arr instanceof Vec
            ? arr.unwrap()
            : arr instanceof Set || is_iter(arr)
                ? __spreadArray([], arr, true) : typeof arr === "string"
                ? arr.split("")
                : Array.from(arr));
        return this;
    }
    Vec.from = function (arr) {
        return new Vec(arr);
    };
    Vec.append = function (xs, ys) {
        return xs.concat(ys);
    };
    Vec.prototype.unwrap = function () {
        return Array.from(this.arr);
    };
    Vec.prototype.clone = function () {
        return new Vec(Array.from(this.arr));
    };
    Vec.prototype.id = function () {
        return this.clone();
    };
    Vec.prototype.o = function () {
        return this.clone();
    };
    Vec.prototype.push = function (item) {
        this.arr.push(item);
        return this;
    };
    Vec.prototype.pop = function () {
        return this.arr.pop();
    };
    Vec.prototype.len = function () {
        return this.arr.length;
    };
    Vec.prototype.get = function (i) {
        return this.arr[i];
    };
    Vec.prototype.empty = function () {
        return this.len() === 0;
    };
    Vec.prototype.clear = function () {
        this.arr = [];
        return this;
    };
    Vec.prototype.for_each = function (callback) {
        this.clone().unwrap().forEach(callback);
    };
    Vec.prototype.map = function (callback) {
        return new Vec(this.clone().unwrap().map(callback));
    };
    Vec.prototype.filter = function (callback) {
        return new Vec(this.clone().unwrap().filter(callback));
    };
    Vec.prototype.reject = function (callback) {
        return new Vec(this.clone()
            .unwrap()
            .filter(function (el, i) {
            return callback.arguments > 1 ? !callback(el, i) : !callback(el);
        }));
    };
    Vec.prototype.partition = function (callback) {
        return new Vec([this.clone().filter(callback), this.clone().reject(callback)]);
    };
    Vec.prototype.any = function (f) {
        return this.clone().filter(f).len() > 0;
    };
    Vec.prototype.all = function (f) {
        return this.clone().filter(f).len() === this.len();
    };
    Vec.prototype.flatten = function () {
        return new Vec(this.clone().unwrap().flat(Infinity));
    };
    Vec.prototype.slice = function (start, end) {
        return new Vec(Array.from(this.arr).slice(start, end));
    };
    Vec.prototype.take = function (n) {
        return new Vec(this.arr.slice(0, n));
    };
    Vec.prototype.drop = function (n) {
        return new Vec(this.arr.slice(n));
    };
    Vec.prototype.rev = function () {
        return new Vec(this.clone().unwrap().reverse());
    };
    Vec.prototype.concat = function (other) {
        return new Vec(__spreadArray(__spreadArray([], this.arr, true), other.unwrap(), true));
    };
    Vec.prototype.uniq = function () {
        return new Vec(__spreadArray([], new Set(Array.from(this.arr)), true));
    };
    Vec.prototype.chunk = function (size) {
        var chunkedArray = [];
        for (var i = 0; i < this.len(); i += size) {
            chunkedArray.push(new Vec(this.arr.slice(i, i + size)));
        }
        return new Vec(chunkedArray);
    };
    Vec.prototype.find = function (predicate) {
        return this.arr.find(predicate);
    };
    Vec.prototype.index_of = function (item) {
        return this.arr.indexOf(item);
    };
    Vec.prototype.last_index_of = function (item) {
        return this.arr.lastIndexOf(item);
    };
    Vec.prototype.index_of_item = function (item, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        return this.arr.indexOf(item, fromIndex);
    };
    Vec.prototype.to_s = function () {
        return JSON.stringify(this.arr, null, 4);
    };
    Vec.prototype.shuffle = function () {
        var _a;
        var shuffledArray = __spreadArray([], this.arr, true);
        for (var i = shuffledArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [shuffledArray[j], shuffledArray[i]], shuffledArray[i] = _a[0], shuffledArray[j] = _a[1];
        }
        return new Vec(shuffledArray);
    };
    Vec.prototype.fold1 = function (f) {
        var memo = 1;
        Array.from(this.arr).forEach(function (x) {
            memo = f(memo, x);
        });
        return memo;
    };
    Vec.prototype.fold = function (f, z) {
        var memo = z;
        Array.from(this.arr).forEach(function (x) {
            memo = f(memo, x);
        });
        return memo;
    };
    Vec.prototype.foldl = function (f, z) {
        return new Vec(Array.from(this.arr)).fold(f, z);
    };
    Vec.prototype.foldr = function (f, z) {
        var memo = z;
        Array.from(this.arr)
            .reverse()
            .forEach(function (x) {
            memo = f(memo, x);
        });
        return memo;
    };
    Vec.prototype.foldr1 = function (f) {
        var memo = 1;
        Array.from(this.arr).reverse().forEach(function (x) {
            memo = f(memo, x);
        });
        return memo;
    };
    Vec.prototype.foldr0 = function (f) {
        var memo = 0;
        Array.from(this.arr).reverse().forEach(function (x) {
            memo = f(memo, x);
        });
        return memo;
    };
    Vec.prototype.foldl0 = function (f) {
        var memo = 0;
        Array.from(this.arr).forEach(function (x) {
            memo = f(memo, x);
        });
        return memo;
    };
    Vec.prototype.foldl1 = function (f) {
        var memo = 1;
        Array.from(this.arr).forEach(function (x) {
            memo = f(memo, x);
        });
        return memo;
    };
    Vec.prototype.fold0 = function (f) {
        var memo = 1;
        Array.from(this.arr).forEach(function (x) {
            memo = f(memo, x);
        });
        return memo;
    };
    Vec.prototype.first = function () {
        return this.arr[0];
    };
    Vec.prototype.last = function () {
        return this.arr[this.arr.length - 1];
    };
    Vec.prototype.freq = function (f) {
        return this.clone().filter(f).len();
    };
    Vec.prototype.freq_of = function (k) {
        return this.clone()
            .filter(function (x) { return x === k; })
            .len();
    };
    Vec.prototype.map2 = function (f, arr) {
        var xs = this.clone().unwrap();
        var ys = arr instanceof Vec ? arr.unwrap() : arr instanceof Set ? __spreadArray([], arr, true) : arr;
        return new Vec(xs.map(function (x, i) { return f(x, ys[i]); }));
    };
    Vec.prototype.compact = function () {
        return new Vec(this.arr.filter(function (item) { return !!item; }));
    };
    Vec.prototype.sum = function () {
        return this.clone().fold0(function (x, y) { return x + y; });
    };
    Vec.prototype.avg = function () {
        return this.sum() / this.len();
    };
    Vec.prototype.product = function () {
        return this.clone().fold1(function (x, y) { return x * y; });
    };
    Vec.prototype.mem = function (k) {
        return this.arr.includes(k);
    };
    Vec.prototype.iter = function () {
        return this.clone().unwrap().entries();
    };
    Vec.prototype.rem = function (k) {
        this.arr = this.clone()
            .reject(function (el) { return k === el; })
            .unwrap();
        return this;
    };
    Vec.prototype.sort_by = function (f) {
        return new Vec(this.clone().unwrap().sort(f));
    };
    Vec.prototype.to_set = function () {
        return new Set(this.clone().unwrap());
    };
    Vec.prototype.Ø = function () {
        return this.empty();
    };
    Vec.prototype.difference = function (arr) {
        var xs = this.clone();
        var ys = Vec.from(arr);
        return Vec.append(Vec.from(xs.filter(function (x) { return !ys.mem(x); })).uniq(), Vec.from(ys.filter(function (x) { return !xs.mem(x); })).uniq());
    };
    Vec.prototype.Δ = function (arr) {
        return this.clone().difference(arr);
    };
    Vec.prototype.intersection = function (arr) {
        var xs = this.clone();
        var ys = Vec.from(arr);
        return Vec.append(Vec.from(xs.filter(function (x) { return ys.ϵ(x); })), Vec.from(ys.filter(function (x) { return xs.ϵ(x); })));
    };
    Vec.prototype.ᐢ = function (arr) {
        return this.intersection(arr);
    };
    Vec.prototype.ϵ = function (x) {
        return this.mem(x);
    };
    Vec.prototype.union = function (arr) {
        return this.clone().concat(Vec.from(arr));
    };
    Vec.prototype.ᐡ = function (arr) {
        return this.union(arr);
    };
    Vec.prototype.properSubset = function (arr) {
        var xs = Vec.from(arr);
        return this.o()
            .ᐡ(xs)
            .map(function (x) { return xs.ϵ(x); })
            .ϵ(true);
    };
    Vec.prototype.ᑦ = function (arr) {
        return this.properSubset(arr);
    };
    Vec.prototype.ᑦR = function () {
        var R = function (x) { return typeof x === "number" && !isNaN(x); };
        return this.clone()
            .map(R)
            .any(function (x) { return x; });
    };
    Vec.prototype.ᑦN = function () {
        var N = function (x) {
            return typeof x === "number" && Number.isInteger(x) && x > 0;
        };
        return this.clone()
            .map(N)
            .any(function (x) { return x; });
    };
    return Vec;
}());
exports.Vec = Vec;

(lib = require './lib')
(fs = require 'fs')
(prelude-ls = require 'prelude-ls')

(function lsseify
    (for key in Object.keys lib
        (global[key] = lib[key])))

(function calcify
    (for key in Object.keys lib
        (global[key] = lib[key]))
    (for key in Object.keys prelude-ls
        (global[key] = prelude-ls[key])))

module.exports = {
    calcify
    lsseify
    lib.mapcar
    lib.str
    lib.int
    lib.random
    lib.upper
    lib.inc
    lib.dec
    lib.supertrim
    lib.freq
    lib.len
    lib.enumerate
    lib.member
    lib.string-append
    lib.map2
    lib.list-ref
    lib.hash-ref
    lib.build-list
    lib.title
    lib.uniq
    lib.memoize
    lib.sorted
    lib.noop
    lib.id
    lib.before
    lib.after
    lib.throttle
    lib.debounce
    lib.lazy
    lib.listTo
    lib.listFrom
    lib.bool
    lib.cond
    lib.pipe
    lib.expt
    lib.replaceAll
    lib.removeAll
    lib.iter
    lib.say
    lib.indexOf
    lib.isNumeric
    lib.csc
    lib.sec
    lib.cot
    lib.arcsin
    lib.arccos
    lib.arctan
    lib.log
    lib.expm1
    lib.replace
    lib.trim-start
    lib.trim-end
    lib.input
    lib.charcode
    lib.make-hash
    lib.fold0
    lib.foldr0
    lib.foldl0
    lib.transpose
    lib.chunk
    lib.sleep
    lib.lambda
    lib.fn
    lib.defun
    lib.define
    lib.defconstant
    lib.defparameter
    lib.defvar
    lib.defmacro
    lib.foldf
    lib.foldt
    lib.foldstr
    lib.change-in
    lib.is-int
    lib.natural-number
    lib.perfect
    lib.divisors
    lib.palindrome
    lib.factorial
    lib.g
    lib.G
    lib.E
    lib.to-deg
    lib.to-rad
    lib.exec
    lib.add-matrix
    lib.minus-matrix
    lib.invert-matrix
    lib.multiply-matrix
    lib.divide-matrix
    lib.comb
    lib.summation
}

(lib = require './lib')
(fs = require 'fs')

(require! {
    'prelude-ls':{floor,filter,map,sort,unique,empty}
})

(function lsseify
    (for key in Object.keys lib
        (global[key] = lib[key])))

module.exports = {
    lsseify
    mapcar
    str
    int
    random
    upper
    inc
    dec
    supertrim
    freq
    len
    enumerate
    member
    string-append
    map2
    list-ref
    hash-ref
    build-list
    title
    uniq
    memoize
    sorted
    noop
    id
    before
    after
    throttle
    debounce
    lazy
    listTo
    listFrom
    bool
    cond
    pipe
    expt
    sqrt
    replaceAll
    removeAll
    append
    iter
    say
    indexOf
    isNumeric
    ln
    sin
    cos
    tan
    csc
    sec
    cot
    arcsin
    arccos
    arctan
    log
    tau
    e
    expm1
    exp
    replace
    trim-start
    trim-end
    input
    charcode
    make-hash
    fold0
    foldr0
    foldl0
    transpose
    chunk
    sleep
    lambda
    fn
    defun
    define
    defconstant
    defparameter
    defvar
    defmacro
}

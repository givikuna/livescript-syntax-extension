require! {
    'prelude-ls':{tail,fold,foldr,flip}
    'child_process':{exec-sync}
}

mapcar = (f, xs) --> [f x for x in xs]

str = (s) -->
    if typeof! s is \Array or Array.is-array s or s instanceof Array
        JSON.stringify s
    else if typeof s is \boolean
        s |> ((b) --> if b then true else false)
    else if typeof s is \null
        \null
    else if typeof s is \undefined
        \undefined
    else
        String s

int = (n) --> if typeof n is \number then Math.floor n else Math.floor Number n

random = (min-val, max-val) -->
    if min-val >= max-val then return min-val
    max-val
        |> (- min-val)
        |> (* Math.random!)
        |> Math.floor
        |> (+ min-val)

lower = (.to-lower-case!)

upper = (.to-upper-case!)

inc = (+ 1)

dec = (- 1)

supertrim = (.replace /\r?\n|\r/g '') >> (.trim!)

freq = (k, xs) --> xs.filter (is k) .length

len = (.length)

enumerate = (.entries!)

member = (k, xs) --> xs.includes k

string-append = (s1, s2) --> s1 + s2

append = (++)

map2 = (f, xs, ys) --> xs.map (x, i) -> f x, ys[i]

list-ref = (i, xs) --> if (>) 0 n then xs[xs.length + n] else xs[n]

hash-ref = (k, xs) --> xs[k]

build-list = (n, f) --> [0 til n].map f

title = (s) --> xs |> (.char-at 0) |> (.to-upper-case!) |> (+ s.slice 1)

uniq = (xs) --> [...(new Set xs)]

memoize = (f) ->
    cache = {}
    (...args) ->
        if args[0] in cache then return cache[args[0]]
        res = f args[0]
        cache[n] = res
        res

sorted = (xs) -->
    if xs.length <= 1 then return xs
    mid = arr.length
        |> (/ 2)
        |> Math.floor
    l = sorted arr.slice 0 mid
    r = sorted arr.slice mid
    ((l2, r2) ->
        a = []
        while l2.length and r2.length
            if l2[0] < r2[0] then a.push l.shift!
            else a.push r.shift!
        [...a, ...l, ...r]) l, r

noop = -> null; return

id = -> it

before = (before-func, func) -->
    (...args) ->
        before-func!
        func ...args

after = (func, after-func) -->
    (...args) ->
        result = func ...args
        after-func!
        result

throttle = (func, delay) ->
    last-time = 0
    (...args) ->
        current-time = Date.now!
        if (current-time - last-time) >= delay then do
            func.apply this, args
            last-time = current-time
        return

debounce = (func, delay) ->
    timeout-id = null
    (...args) ->
        clear-timeout timeout-id
        timeout-id = set-timeout do
            -> func ...args
            delay
        return

lazy = (f) ->
    evaluated = no
    result = null
    (...args) ->
        if not evaluated
            result = func ...args
            evaluated = yes
        result

list-to = (x, y) --> [x to y]

list-til = (x, y) --> [x til y]

bool = Boolean

pipe = (x, ...fs) ->
    y = x
    for f in fs
        y = f y
    y

cond = (...conditions) ->
    for condition in conditions
        if condition[0] is true
            if condition[1] instanceof Function
                return condition[1]()
            else
                return condition[1]
    if conditions[conditions.length - 1] is \else
        return conditions[conditions.length - 1][1]
    null

expt = flip Math.pow

replace-all = (x1, x2, xs) --> xs.replace-all x1, x2

remove-all = (x, xs) --> xs.replace-all x, ''

string-append = (s1, s2) --> s1 + s2

iter = (.values!)

say = console.log

index-of = (x, xs) --> xs.index-of x

is-numeric = /^[-+]?\d+(\.\d+)?$/.test

csc = (1 /) >> Math.sin

sec = (1 /) >> Math.cos

cot = (1 /) >> Math.tan

arcsin = Math.asin

arccos = Math.acos

arctan = Math.atan

arccsc = (1 /) >> Math.asin

arcsec = (1 /) >> Math.acos

arctan = (1 /) >> Math.atan

expm1 = Math.expm1

replace = (x1, x2, xs) --> xs.replace x1, x2

trim-start = (.trim-start!)

trim-end = (.trim-end!)

input = require \readline-sync .question

charcode = (.char-code-at 0)

make-hash = (xs) -->
    obj = {}
    xs.for-each (x) -> obj[x[0]] = x[1]
    obj

fold0 = (f, xs) --> fold f, 0, xs

foldl0 = fold0

foldr0 = (f, xs) --> foldr f, 0, xs

transpose = (arr) -->
    if not arr or arr.length is 0 or arr[0].length is 0 then return []
    row-count = arr.length
    col-count = arr[0].length
    transposed-arr = []
    col = 0
    while col < col-count
        transposed-arr[col] = []
        row = 0
        while row < row-count
            transposed-arr[col][row] = arr[row][col]
            row += 1
        col += 1
    transposed-arr

chunk = (arr, size) -->
    chunked-arr = []
    i = 0
    while i < arr.length
        chunk_ = arr.slice i, (i + size)
        chunked-arr.push chunk
        i += 1
    chunked-arr

sleep = ( amount, type = \milliseconds ) ->
    multiplier = do ->
        if type is \seconds then return 1000
        if type is \hours then return 3600000
        if type is \days then return 86400000
        return 1
    start = new Date!get-time!
    while (new Date!get-time! - start) < (multiplier * amount)
        null
    return

make-legal-JS-name = (s) -->
    name = s.replace /\r?\n|\r/g, '' .trim!
    if /^[a-zA-Z0-9]+$/.test name then return name
    if name[0] is name[0].to-upper-case! then return lodash.camel-case(name)replace /\b\w/g (c) -> c.to-upper-case!
    lodash.camel-case name

function defun name, func
    if global.has-own-property name then return null
    if not func
        global[make-legal-JS-name name] = null
        return global[make-legal-JS-name name]
    global[make-legal-JS-name name] = func
    func

function define name, val
    if global.has-own-property name then do
        return global['name']
    if not val then do
        global[make-legal-JS-name name] = null
        return global[make-legal-JS-name name]
    global[make-legal-JS-name name] = val
    val

function defconstant name, val
    if global.has-own-property name then do
        return global['name']
    if not val then do
        global[make-legal-JS-name name] = null
        return global[make-legal-JS-name name]
    Object.define-property do
        global
        make-legal-JS-name name
        {
            value: val
            writable: false
            configurable: false
        }
    val

function defparameter name, val
    if global.has-own-property name then do
        return null
    defun name, val

function defvar name
    if not global.has-own-property name then do
        global[name] = undefined
    return

function defmacro name, func
    defun name, func

lambda = (f) -> (...args) -> f ...args

fn = lambda

exec = exec-sync

module.exports = {
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
    replaceAll
    removeAll
    iter
    say
    indexOf
    isNumeric
    csc
    sec
    cot
    arcsin
    arccos
    arctan
    expm1
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

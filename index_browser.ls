export Vec = require('./Vec').Vec

export flip = (f, x, y) --> f y, x

export rev = (Array.from) >> (.reverse!)

export fold = (f, z, xs) -->
    memo = z
    for x in xs
        memo = f memo, x
    memo

export foldl = fold

export foldr = (f, z, xs) --> foldl f, z, rev xs

export fold1 = (f, xs) --> fold f, 1 xs

export foldl1 = fold1

export foldr1 = (f, xs) --> foldr1 f, rev xs

export filter = (f, xs) --> [x for x in xs when f x]

export reject = (f, xs) --> (flip filter) xs, ((f) >> (not))

export partition = (f, xs) --> [(filter f, xs), (reject f, xs)]

export map = (f, xs) --> [f x for x in xs]

export mapcar = (f, xs) --> [f x for x in xs]

export str = (s) -->
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

export int = (n) --> if typeof n is \number then Math.floor n else Math.floor Number n

export random = (min-val, max-val) -->
    if min-val >= max-val then return min-val
    max-val
        |> (- min-val)
        |> (* Math.random!)
        |> Math.floor
        |> (+ min-val)

export lower = (.to-lower-case!)

export upper = (.to-upper-case!)

export inc = (+ 1)

export dec = (- 1)

export supertrim = (.replace /\r?\n|\r/g '') >> (.trim!)

export freq = (k, xs) --> xs.filter (is k) .length

export len = (.length)

export enumerate = (.entries!)

export member = (k, xs) --> k in xs

export mem = member

export map2 = (f, xs, ys) --> xs.map (x, i) -> f x, ys[i]

export string-append = (s1, s2) --> s1 + s2

export list-ref = (i, xs) --> if (>) 0 n then xs[xs.length + n] else xs[n]

export hash-ref = (k, xs) --> xs[k]

export build-list = (n, f) --> [0 til n].map f

export title = (s) --> s |> (.char-at 0) |> (.to-upper-case!) |> (+ s.slice 1)

export uniq = (xs) --> [...(new Set xs)]

export memoize = (f) ->
    cache = {}
    (...args) ->
        if args[0] in cache then return cache[args[0]]
        res = f args[0]
        cache[n] = res
        res

export sorted = (xs) -->
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

export noop = -> null; return

export id = -> it

export before = (before-func, func) -->
    (...args) ->
        before-func!
        func ...args

export after = (func, after-func) -->
    (...args) ->
        result = func ...args
        after-func!
        result

export throttle = (func, delay) ->
    last-time = 0
    (...args) ->
        current-time = Date.now!
        if (current-time - last-time) >= delay then do
            func.apply this, args
            last-time = current-time
        return

export debounce = (func, delay) ->
    timeout-id = null
    (...args) ->
        clear-timeout timeout-id
        timeout-id = set-timeout do
            -> func ...args
            delay
        return

export lazy = (f) ->
    evaluated = no
    result = null
    (...args) ->
        if not evaluated
            result = func ...args
            evaluated = yes
        result

export list-to = (x, y) --> [x to y]

export list-til = (x, y) --> [x til y]

export bool = Boolean

export pipe = (x, ...fs) ->
    y = x
    for f in fs
        y = f y
    y

export cond = (...conditions) ->
    for condition in conditions
        if condition[0] is true
            if condition[1] instanceof Function
                return condition[1]()
            else
                return condition[1]
    if conditions[conditions.length - 1] is \else
        return conditions[conditions.length - 1][1]
    null

export expt = flip Math.pow

export replace-all = (x1, x2, xs) --> xs.replace-all x1, x2

export remove-all = (x, xs) --> xs.replace-all x, ''

export iter = (.values!)

export say = console.log

export index-of = (x, xs) --> xs.index-of x

export is-numeric = /^[-+]?\d+(\.\d+)?$/.test

export replace = (x1, x2, xs) --> xs.replace x1, x2

export expm1 = Math.expm1

export trim-start = (.trim-start!)

export trim-end = (.trim-end!)

export charcode = (.char-code-at 0)

export make-hash = (xs) -->
    obj = {}
    xs.for-each (x) -> obj[x[0]] = x[1]
    obj

export fold0 = (f, xs) --> fold f, 0, xs

export foldl0 = fold0

export foldr0 = (f, xs) --> foldr f, 0, xs

export transpose = (arr) -->
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

export chunk = (arr, size) -->
    chunked-arr = []
    i = 0
    while i < arr.length
        chunk_ = arr.slice i, (i + size)
        chunked-arr.push chunk
        i += 1
    chunked-arr

export sleep = ( amount, type = \milliseconds ) ->
    multiplier = do ->
        if type is \seconds then return 1000
        if type is \hours then return 3600000
        if type is \days then return 86400000
        return 1
    start = new Date!get-time!
    while (new Date!get-time! - start) < (multiplier * amount)
        null
    return

export lambda = (f) -> (...args) -> f ...args

export fn = lambda

export λ = lambda

export expm1 = Math.expm1

export palindrome = (s) --> s is rev s

export foldstr = (f, xs) --> fold f, '', xs

export change-in = (f, i) --> if typeof f is \number then f - i else f[0] - f[1]

export foldt = (f, xs) --> fold true '' xs

export foldf = (f, xs) --> fold false '' xs

export factorial = --> if it in [0 1] then it else (* it) factorial dec it

export ǃ = factorial

export comb = (n, k) --> (ǃ n) / ((ǃ (n - k)) * ǃ k)

export nCr = comb

export sin = Math.sin

export cos = Math.cos

export tan = Math.tan

export csc = (1 /) >> Math.sin

export sec = (1 /) >> Math.cos

export cot = (1 /) >> Math.tan

export arcsin = Math.asin

export arccos = Math.acos

export arctan = Math.atan

export arccsc = (1 /) >> Math.asin

export arcsec = (1 /) >> Math.acos

export arctan = (1 /) >> Math.atan

export to-rad = (* Math.PI) >> (/ 180.0deg)

export to-deg = (* 180.0deg) >> (/ Math.PI)

export dsin = to-rad >> Math.sin

export dcos = to-rad >> Math.cos

export dtan = to-rad >> Math.tan

export dcsc = to-deg >> (1 /) >> Math.sin

export dsec = to-deg >> (1 /) >> Math.cos

export dcot = to-deg >> (1 /) >> Math.tan

export darcsin = Math.asin >> to-deg

export darccos = Math.acos >> to-deg

export darctan = Math.atan >> to-deg

export darccsc = (1 /) >> Math.asin >> to-deg

export darcsec = (1 /) >> Math.acos >> to-deg

export darccot = (1 /) >> Math.atan >> to-deg

export ln = Math.log

export recip = (1 /)

export log10 = Math.log10

export log1p = Math.log1p

export log2 = Math.log2

export log = (base, n) --> (Math.log n) / (Math.log base)

export even = (% 2) >> (is 0)

export odd = (% 2) >> (isnt 0)

export signum = --> if (>) 0 x then -1 else if (<) 0 x then 1 else 0

export E = (n, ex) --> n * Math.pow 10 ex

export G = 6.67384`E`-11

export earth-mass = 5.97219`E`24kg

export earth-radius = 6378100m

export ge = (G * earth-mass) / (earth-radius^2)

export gn = 9.807mpss

export g = gn

export is-natural-number = (n) --> n > 0 and Number.is-integer n

export is-int = Number.is-integer

export summation = (n, i, f) --> fold0 (+), [f x for x in [i to n]]

export Σ = --> foldl0 (+), it

export add-matrix = (xs, ys) --> xs.map (a, i) -> a.map (x, j) -> x + ys[i][j]

export subtract-matrix = (xs, ys) --> xs.map (a, i) -> a.map (x, j) -> x - ys[i][j]

export multiply-matrix = (A, B) -->
    if len A[0] isnt len B then throw new Error 'length of A[0] must equal length of B'
    C = [[0 for b in B[0]] for a in A]
    for i in [0 til len A]
        for j in [0 til len B[0]]
            C[i][j] = fold0 (+), A[i].map ((a, k) -> a * B[k][j])
    C

export divide-matrix = (A, B) --> multiply-matrix A, invert-matrix b

export elementary-charge = 1.602176634`E`-19

export e = Math.E

export C = 299792458mps # speed of light

export π = Math.PI

export pi = Math.PI

export τ = (*) 2 π

export tau = τ

export magnetic-constant = ((*) 4 π)`E`-7Hpm

export μ0 = magnetic-constant

export vacuum-permittivity = recip (μ0 * C^2)

export ε0 = vacuum-permittivity

export Ke = recip (4 * π * ε0)

export electron-mass = 9.1093837015`E`-31

export proton-mass = 1.67262192`E`-27

export me = electron-mass

export mp = proton-mass

export mα = (*) 4 proton-mass

export alpha-particle-mass = mα

export Qα = (*) 2 elementary-charge

export alpha-particle-charge = Qα

export abs = Math.abs

export floor = Math.floor

export ceil = Math.ceil

export sqrt = Math.sqrt

export cbrt = Math.cbrt

export gcd = (n, m) -->
    while m
        tmp = m
        m = n % m
        n = tmp
    Math.abs n

export gcf = gcd

export lcm = (n, m) --> (n * m) / gcd n, m

export append = (++)

export list-append = append

export string-append = (+)

export ƒ = lambda

export ǀ = len

export ǁ = Math.abs

export Δ = (xs, ys) --> uniq (++) [x for x in xs when x not in ys] [y for y in ys when y not in xs]

export difference = Δ

export ϵ = (x, xs) --> x in xs

export ᐡ = (++) >> uniq

export union = ᐡ

export ᐢ = (xs, ys) --> uniq (++) [x for x in xs when x in ys] [y for y in ys when y in xs]

export intersection = ᐢ

export ᑦ = (xs, ys) -->
    xsu = uniq xs
    ysu = uniq ys
    ϵ on [(x `ϵ` ysu) for x in xsu]

export proper-subset = ᑦ

export ᐣ = flip ᑦ

export proper-superset = ᐣ

export negate = --> if (<) 0 it then -it else it

export neg = negate

export ᐨ = neg

export ᕀ =--> if (>) 0 it then -it else it

export Ɩ = Math.floor

export to_set = (new Set)

export Ø = len >> (< 1)

export p = console.log

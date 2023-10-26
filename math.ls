require! {
  'prelude-ls':{filter,tail,head}
}

mathjs = require \mathjs

export inc = (+ 1)

export dec = (- 1)

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

export dsin = to-deg >> Math.sin

export dcos = to-deg >> Math.cos

export dtan = to-deg >> Math.tan

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

export log10 = Math.log10

export log1p = Math.log1p

export log2 = Math.log2

export log = (base, n) --> (Math.log n) / (Math.log base)

export even = (% 2) >> (is 0)

export odd = (% 2) >> (isnt 0)

export E = (n, ex) --> n * Math.pow 10 ex

export G = 6.67384`E`-11

export g = 9.807mpss

export factorial = (n) --> if n is 0 or n is 1 then 1 else n * factorial dec n

export divisors = (n) --> filter ((x) -> n % x is 0), [1 til n]

export is-perfect = (n) --> n is fold0 (+), divisors n

export is-natural-number = (n) --> n > 0 and Number.is-integer n

export is-int = Number.is-integer

export len = (.length)

export summation = (n, i, f) --> fold0 (+), [f x for x in [i to n]]

export comb = (n, k) --> (factorial n) / ((factorial n - k) * factorial k)

export invert-matrix = mathjs.inv

export add-matrix = (xs, ys) --> xs.map (a, i) -> a.map (x, j) -> x + ys[i][j]

export minus-matrix = (xs, ys) --> xs.map (a, i) -> a.map (x, j) -> x - ys[i][j]

export multiply-matrix = (A, B) -->
    if len A[0] isnt len B then throw new Error 'length of A[0] must equal length of B'
    C = [[0 for b in B[0]] for a in A]
    for i in [0 til len A]
        for j in [0 til len B[0]]
            C[i][j] = fold0 (+), A[i].map ((a, k) -> a * B[k][j])
    C

export divide-matrix = (A, B) --> multiply-matrix A, invert-matrix b

export elementary-charge = 1.602176634`E`-19

export C = 299792458mps # speed of light

export proton-mass = 1.672621898`E`-27kg

export neutron-mass = 1.67492749804`E`-27kg

export electron-mass = 9.10938356`E`-31kg

export electrostatic-force = (Q1, Q2, r) --> (K * Q1 * Q2) / (r^2) # N

export gravitational-force = (m1, m2, r) --> (G * m1 * m2) / (r^2) # N

export F = (m, a) --> m * a # N

export centripetal-force = (m, v, r) --> (m * (v^2)) / r # N

export frictional-force = (coef, FN) --> coef * FN # N

export spring-force = (k, x) --> -k * x # N

export quadratic-formula = (a, b, c) -->
    fun = ((f) -> (-b `f` sqrt((b^2) - (4 * a * c))) / (2 * a))
    return [
        fun (+)
        fun (-)
    ]

export Plancks-constant = 6.626070040`E`-34

export Boltzmann-constant = 1.38064852`E`-23

export Faraday-constant = 9.648533289`E`4

export neuron-mass = 1.674927471`E`-27

export Rydberg-constant = 1.0973731568508`E`7

export Stefan-Boltzmann-constant = 5.670367`E`-8

export fine-structure-constant = 7.297352566`E`-3

export mole = 6.02214076`E`23

export e = Math.E

export pi = Math.PI

export tau = (*) 2 pi

export abs = Math.abs

export sqrt = Math.sqrt

export cbrt = Math.cbrt

export ceil = Math.ceil

export floor = Math.floor

export exp = (Math.E^)

export expm1 = (Math.E^) >> (- 1)

export max = (>?)

export min = (<?)

export signum = (x) --> if x < 0 then -1 else if x > 0 then 1 else 0

export quot = (x, y) --> ~~(x / y)

export rem = (%)

export pow = (^)

export ln10 = Math.LN10

export ln2 = Math.LN2

export log10e = Math.LOG10E

export log2e = Math.LOG2E

export clz32 = Math.clz32

export gcd = (x, y) -->
    xs = divisors x
    ys = divisors y
    ys
        |> filter xs.includes
        |> last

export gcf = gcd

export lcm = (x, y) --> (x * y) / gcf x, y

export delete-after-index = (n, xs) --> xs.slice 0 n

export delete-after = (x, xs) --> if xs.findIndex((is x)) then xs.slice 0 xs.findIndex (is x) else xs

export trunc = (.to-string!) >> (.split '') >> (delete-after '.') >> (.join '')

export recip = (1 /)

export say = console.log

export π = Math.PI

export λ = (f) -> (...args) -> f ...args

export τ = (*) 2 π

export εo = 8.854187817`E`-12

export Ke_approx = 9`E`9

export Ke = recip (4 * π * εo)

export sieve = (n) -->
    worksheet = [2 to n]
    primes = []
    while worksheet[0] > sqrt n
        primes.push worksheet[0]
        worksheet = filter worksheet, ((% primes[dec len primes]) >> (is 0))
    return primes ++ worksheet

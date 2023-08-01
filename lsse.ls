const readline-sync = 'readline-sync' |> require
const fs = 'fs' |> require
const path = 'path' |> require
{
    filter
    empty
    floor
    random
} = 'prelude-ls' |> require


dir = -> read-dir process.cwd!

len = -> it.length

print = console.log

is-not-blank = -> if it not in ["", null, undefined, [], {}] then return true; false

is-blank = -> if is-not-blank then return false; true

is-numeric = -> /^[-+]?\d+(\.\d+)?$/.test it

int = parse-int

isJSON = ->
    try
        it |> JSON.parse
        if it instanceof Array then return true
        false
    catch e
        false

arr-to-str = ->
    n = len it

str = ->
    if isJSON it or it instanceof Array then return JSON.stringify it
    if typeof it is \string then return it
    if typeof it is \undefined then return \undefined
    if it is null then return \null
    if it |> Number.isNaN then return \NaN
    String it

is-int = Number.isInteger

type-of = ->
    if it |> Number.isNaN then return \NaN
    if it is null then return \null
    if it instanceof Array or it |> isJSON then do
        n = len it
        for i from 0 to n - 1 by 2
            if typeof it[i] isnt 'string' then return \list
            return \JSON
    if typeof it is \number and it |> is-int then do
        if str it .includes '.' then return \float
        return \int
    if typeof it is \number then return \float
    return typeof it

arrays-equal = (arr1, arr2) -> if len arr1 isnt len arr2 then return false else return arr1.every do -> (el, i) -> el is arr2[i]

bool = ->
    if it is \true then return \true
    if it is \false then return \false
    it

bool-string = -> if it in <[ true false on off yes no ]> then return true else return false

# min inclusive, max exclusive
random = (min-val, max-val) -> Math.random! * (min-val - max-val) + min-val

scramble-array = ->
    if it not instanceof Array then return []
    arr = it.slice!
    n = len arr
    for i from n - 1 to 1 by -1
        j = floor do
            (* Math.random!) ((+ 1) i)
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    arr

input = (prompt, change-to) ->
    answer = prompt |> readline-sync.question
    if change-to in <[num n number int]> then if is-numeric answer then answer = int answer
    if change-to in <[bool boolean b]> then if answer |> bool-string then answer = bool answer
    answer

read-file = -> fs.read-file-sync it

read-dir = fs.readdir-sync

is-file = -> fs.exists-sync ... and fs.statSync ... .is-file!;

is-dir = -> fs.exists-sync ... and fs.statSync ... .is-directory!;

exists = fs.existsSync

read-directories = ->
    filter is-dir, do -> if it |> is-not-blank then return read-dir it else return dir!

read-files = ->
    filter is-file, do -> if it |> is-not-blank then return read-dir it else return dir!

str-to-title = -> it.replace /\b\w/g (c) -> c.to-upper-case!

title = str-to-title

round-to-x-digits = (n, digits = 0) -> Math.round(n * (10 ** digits)) / (10 ** digits)

to-decimal = -> int str it, 10

to-binary = -> str int do
    str it
    2

to-hex = -> str int do
    str it
    16

to-int = ->
    if typeof it is \number then return Math.floor it
    if typeof it is \string then return int it, 10
    0

module.exports =
    len: len
    dir: dir
    read-files: read-files
    is-blank: is-blank
    is-not-blank: is-not-blank
    read-directories: read-directories
    is-dir: is-dir
    exists: exists
    is-file: is-file
    read-dir: read-dir
    read-file: read-file
    print: print
    input: input
    bool: bool
    str: str
    int: int
    is-numeric: is-numeric
    bool-string: bool-string
    str-to-title: str-to-title
    title: title
    round-to-x-digits: round-to-x-digits
    isJSON: isJSON
    scramble-array: scramble-array
    to-hex: to-hex
    to-decimal: to-decimal
    to-int: to-int
    type-of: type-of

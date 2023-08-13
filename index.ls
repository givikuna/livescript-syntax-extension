const readline-sync = require \readline-sync
const fs = require \fs
const path = require \path
const _ = require \lodash
const { exec-sync } = require \child_process


{
    filter
    empty
    floor
    is-it-NaN
    flatten
    any
} = require 'prelude-ls'

(function dir
    (fs.readdir-sync process.cwd!))

(function current-dir
    (process.cwd!))

(function len
    (it.length))

(function print ...data
    (console.log ...data))

(function is-numeric
    (/^[-+]?\d+(\.\d+)?$/.test it))

(function have-matching-values arr1, arr2
    (for el1 in arr1
        (for el2 in arr2
            (if el1 `equals` el2
                (return yes))))
    (no))

(function has-matching-values-with ...args
    (have-matching-values ...args))

(function does-not-have-matching-values-with arr1, arr2
    (not (arr1 `has-matching-values-with` arr2)))

(function occurs
    (count-occurrences(...) `is-more-than` 0))

(function occurs-in
    (occurs ...))

(function count-occurrences key, to-search
    (count = 0)
    (if Array.is-array to-search
        (i = 0)
        (while i < len to-search
            (if not Array.is-array key and Array.is-array to-search[i] then count += to-search `count-occurrences-of` key)
            (if to-search[i] `equals` key then count++)))
    (if typeof to-search is \string and typeof key is \string or typeof key is \number or typeof key is \boolean
        (key = str key)
        (count = to-search.split(key)length - 1))
    (count))

(function count-occurrences-in
    (count-occurrences ...))

(function occurs-more-than key, to-search, count
    (count-occurrences(key, to-search) > count))

(function occurs-less-than key, to-search, count
    (count-occurrences(key, to-search) < count))

(function lower
    (if typeof it is \string
        (return it.toLowerCase!))
    (if typeof Array.is-array it
        (for el in it
            (if typeof el is \string or Array.is-array el
                (it[it.index-of el] = lower el)))
        (return it))
    (it))

(function upper
    (if typeof it is \string
        (return it.toUpperCase!))
    (if typeof Array.is-array it
        (for el in it
            (if typeof el is \string
                (it[it.index-of el] = upper el)))
        (return it))
    (it))

(const ONCE = 1)

(const nothing = null)

(const NOTHING = nothing)

(function more-than el1, el2
    (el1 > el2))

(function less-than el1, el2
    (el1 < el2))

(function is-more-than
    (more-than ...))

(function is-less-than
    (less-than ...))

(function no-more-than a, b
    (a < b or a is b))

(function no-less-than a, b
    (a > b or a is b))

(is-no-more-than = no-more-than)

(is-no-less-than = no-less-than)

(function supertrim
    (it.replace /\r?\n|\r/g '' .trim!))

(function string-to-number
    (if typeof it isnt \string or /^\d+[a-zA-Z]*$/.test it is false or count-occurrences \- it > 0 and not it.starts-with \-
        (return 0))
    (it = supertrim it)

    (style = ((input-string) ->
        (if (count-occurrences \. input-string) > 1 and (count-occurrences \, input-string) < 2 and (count-occurrences \_ input-string) is 0 then do
            ( return \european ))
        (if (count-occurrences \, input-string) > 1 and (count-occurrences \. input-string) < 2 and (count-occurrences \_ input-string ) is 0 then do
            ( return \american ))
        (if (count-occurrences \, input-string) > 0 and not occurs \. input-string then do
            ( return \weird-pythonic ))
        ( \pythonic )) it)
    (try
        (Number do
            (((given-style, given-string) ->
                (return-string = '')
                (if given-style is \pythonic then do
                    (return-string = given-string.replace /_/g ''))
                (if given-style is \european then do
                    (return-string = given-string.replace /\./g '' .replace /,/ \. ))
                (if given-style is \american then do
                    (return-string = given-string.replace /,/g ''))
                (if given-style is \weird-pythonic then do
                    (return-string = given-string.replace /_/g '' .replace /,/ \. ))
                (return-string.replace /[A-Za-z]/g '')) style, it))
    catch e
        (0)))

(function int
    (try
        (if typeof it is \number
            (return Math.floor it))
        (if typeof it is \string
            (if is-numeric it
                (return parse-int it, 10))
            (return int string-to-number it))
        (Number it)
    catch e
        (0)))

(function isJSON
    (try
        (if typeof it is \string then do
            (try
                (JSON.parse it)
                (return true)
            catch err
                (return false)))
        (if typeof it is \Object then do
            (try
                (if Array.is-array it then return true)
                (if Array.is-array JSON.parse JSON.stringify it then return true)
                (return true)
            catch err
                (return false)))
    catch e
        (false))
    (false))

(function is-array
    (Array.is-array it or isJSON it or it instanceof Array or it instanceof JSON))

(function equals val1, val2
    (try
        (if val1 is val2
            (return yes))
        (if val1 `deep-equals` val2
            (return yes))
        (if typeof val1 isnt typeof val2
            (return no))
        (if Array.is-array val1 isnt Array.is-array val2
            (return no))
        (if len Object.keys val1 isnt len Object.keys val2
            (return no))

        (if Array.is-array val1 and Array.is-array val2
            (i = 0)
            (while i < len val1
                (if not val1[i] `deep-equals` val2[i] then return no))
        else
            (for key in val1
                (if not val1[key] `deep-equals` val2[key] then return no)))

        (yes)
    catch e
        (no)))

(function equals-any key, arr
    (if key in arr
        (return yes))
    (for el in flatten arr
        (if key `equals` el
            (return yes)))
    (no))

(function is-not-blank
    (if it `equals-any` [null, undefined, "", {}, []] or empty it
        (return yes))
    (no))

(function is-blank
    (not is-not-blank it))

(function bool
    ( if it is \true or it is 1 then return \true )
    ( if it is \false or it is 0 then return \false )
    ( if it then return \true )
    ( \false ))

(function boolean-to-string
    ( if it then return \true )
    ( \false ))

(function bool-string
    (if it in <[ true false on off yes no ]> then return true else return false))

(function str
    (if isJSON it or it instanceof Array
        (return JSON.stringify it))
    (if typeof it is \string
        (return it))
    (if typeof it is \undefined
        ( return \undefined ))
    (if it is null
        ( return \null ))
    (if is-it-NaN it
        ( return \NaN ))
    (if typeof it is \boolean and bool-string it
        (return boolean-to-string it))
    (try
        (String it)
    catch e
        ("")))

# min inclusive, max exclusive
(function random min-val, max-val
    ((+ min-val) Math.random! * (min-val - max-val)))

(function input prompt, change-to = \str
    (answer = prompt |> readline-sync.question)
    (if change-to in <[num n number int]> and is-numeric answer
       ( answer = int answer))
    (if change-to in <[bool boolean b]> and bool-string answer
        (answer = bool answer))
    (answer))

(function read-file
    (fs.read-file-sync ...))

(function read-dir
    (fs.readdir-sync ...))

(function is-file
    (fs.exists-sync ... and fs.statSync ... .is-file!))

(function is-dir
    (fs.exists-sync ... and fs.statSync ... .is-directory!;))

(function exists
    (fs.existsSync ...))

(function read-directories
    (if not it or is-blank it
        (it = current-dir!))
    (try
        (filter is-dir, read-dir it)
    catch e
        ([])))

(function read-directories-in
    (read-directories ...))

(function read-files
    (if not it or is-blank it
        (it = current-dir!))
    (try
        (filter is-file, read-dir it)
    catch e
        ([])))

(function read-files-in
    (read-files ...))

(function count-directories
    (len read-directories it))

(function count-files
    (len read-files it))

(function count-files-in
    (count-files ...))

(function count-directories-in
    (count-directories ...))

(function str-to-title
    (it.replace do
        /\b\w/g
        (c) ->
            (upper c)))

(function title
    (str-to-title it))

(function round-to-x-digits n, digits = 0
    (Math.round(n * (10 ** digits)) / (10 ** digits)))

(function to-decimal
    (int str it, 10))

(function to-binary
    (str int do
        (str it)
        (2)))

(function to-hex
    (str int do
        (str it)
        (16)))

(function transpose
    (if not it or len it is 0 or len it[0] is 0
        (return []))
    (const row-count = len it)
    (const col-count = len it[0])
    (const transposed = [])
    (col = 0)
    (while col < col-count
        (tranposed[col] = [])
        (row = 0)
        (while row < row-count
            (transposed[col][row] = it[row][col])
            (row++))
        (col++))
    (transposed))

(function chunk arr, size = 1
    (const chunked-arr = [])
    (i = 0)
    (while i < len arr
        (const a-chunk = arr.slice do
            (i)
            (i + size))
        (chunked-arr.push a-chunk))
    (chunked-arr))

(function make-function-name name
    (name = supertrim name)
    (if /^[a-zA-Z0-9]+$/.test name
        (return name))
    (if name[0] is upper name[0]
        (return title _.camel-case name))
    (_.camel-case name))

(function defun name, fn
    (global[make-function-name name] = fn)
    (return))

(function lambda fn
    ((...args) ->
        (fn ...args)))

(function echo
    (print ...))

(function get-file-extension file-name
    (if typeof file-name isnt \string or any (equals file-name), [null, undefined] then do
        (return undefined))
    (if (file-name.split \. |> len) `is-more-than` 1 then do
        (return str file.split \. .pop!))
    (str undefined))

(function execute command
    (command |> exec-sync |> str))

module.exports =
    execute: execute
    get-file-extension: get-file-extension
    echo: echo
    lambda: lambda
    defun: defun
    len: len
    print: print
    dir: dir
    is-numeric: is-numeric
    int: int
    isJSON: isJSON
    str: str
    equals: equals
    bool: bool
    random: random
    input: input
    read-file: read-file
    read-dir: read-dir
    is-file: is-file
    is-dir: is-dir
    exists: exists
    count-directories: count-directories
    count-files: count-files
    str-to-title: str-to-title
    title: title
    round-to-x-digits: round-to-x-digits
    to-decimal: to-decimal
    to-binary: to-binary
    to-hex: to-hex
    transpose: transpose
    chunk: chunk
    current-dir: current-dir
    is-not-blank: is-not-blank
    is-blank: is-blank
    read-directories: read-directories
    read-files: read-files
    have-matching-values: have-matching-values
    has-matching-values-with: has-matching-values-with
    does-not-have-matching-values-with: does-not-have-matching-values-with
    count-occurrences: count-occurrences
    more-than: more-than
    less-than: less-than
    occurs-more-than: occurs-more-than
    occurs-less-than: occurs-less-than
    count-occurrences-in: count-occurrences-in
    occurs: occurs
    occurs-in: occurs-in
    lower: lower
    upper: upper
    ONCE: ONCE
    nothing: nothing
    NOTHING: nothing
    string-to-number: string-to-number
    is-more-than: is-more-than
    is-less-than: is-less-than
    is-array: is-array
    read-directories-in: read-directories-in
    read-files-in: read-files-in
    count-directories-in: count-directories-in
    count-files-in: count-files-in

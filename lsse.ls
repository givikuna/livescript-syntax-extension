const readline-sync = 'readline-sync' |> require
const fs = 'fs' |> require
const path = 'path' |> require
{
    filter
    empty
} = 'prelude-ls' |> require


dir = ->
    current-directory = process.cwd!
    files = read-dir current-directory

len = -> it.length

print = console.log

is-not-blank = ->
    if it not in ['', "", null, undefined, [], {}] then return true
    false

is-blank = -> if is-not-blank then return false else then return true

is-numeric = -> /^[-+]?\d+(\.\d+)?$/.test it

int = parseInt

str = String

bool = ->
    if it is \true then return \true
    if it is \false then return \false
    it

bool-string = -> if it in <[ true false on off yes no ]> then return true; false

input = (prompt, change-to) ->
    answer = prompt |> readline-sync.question
    if change-to in ['num', 'n', 'number', 'int']
        if is-numeric answer then answer = int answer
    if change-to in ['bool', 'boolean', 'b']
        if answer |> bool-string then answer = bool answer
    answer

read-file = -> fs.readFileSync it

read-dir = fs.readdirSync

is-file = -> fs.existsSync ... and fs.statSync ... .isFile();

exists = fs.existsSync

is-dir = -> if exists ... and fs.statSync ... .isDirectory! then return true else then return false

read-directories = ->
    dir-data = do ->
        if it |> is-not-blank then return read-dir it
        dir!
    filter do
        is-dir
        dir-data

read-files = ->
    dir-data = do ->
        if it |> is-not-blank then return read-dir it
        dir!
    filter do
        is-file
        dir-data

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

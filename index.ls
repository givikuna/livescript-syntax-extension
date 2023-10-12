(lib = require './lib')
(fs = require 'fs')

(require! {
    'prelude-ls':{floor,filter,map,sort,unique,empty}
})

(function lispify
    (for key in Object.keys lib
        (global[key] = lib[key])))

module.exports =
    lispify: lispify
    bool: lib.bool
    dir: lib.dir
    current-dir: lib.current-dir
    print: lib.print
    equals: lib.equals
    equals-any: lib.equals-any
    is-not-blank: lib.is-not-blank
    is-blank: lib.is-blank
    input: lib.input
    read-file: lib.read-file
    read-dir: lib.read-dir
    is-file: lib.is-file
    is-dir: lib.is-dir
    exists: lib.exists
    read-dirs: lib.read-dirs
    read-files: lib.read-files
    count-dirs: lib.count-dirs
    count-files: lib.count-files
    make-legal-java-script-name: lib.make-legal-java-script-name
    defun: lib.defun
    define: lib.define
    defmacro: lib.defmacro
    defconstant: lib.defconstant
    defparameter: lib.defparameter
    defvar: lib.defvar
    lambda: lib.lambda
    fn: lib.fn
    clone: lib.clone
    echo: lib.echo
    execute: lib.execute
    exec: lib.exec
    println: lib.println
    funcall: lib.funcall
    def: lib.def
    length: lib.length
    sleep: lib.sleep
    lazy: lib.lazy
    throttle: lib.throttle
    debounce: lib.debounce
    noop: lib.noop
    identity: lib.identity
    before: lib.before
    after: lib.after
    say: lib.say
    len: lib.len
    is-numeric: lib.is-numeric
    lower: lib.lower
    upper: lib.upper
    supertrim: lib.supertrim
    string-to-number: lib.string-to-number
    boolean-to-string: lib.boolean-to-string
    str: lib.str
    flat-str: lib.flat-str
    str-to-title: lib.str-to-title
    rev: lib.rev
    get-file-extension: lib.get-file-extension
    int: lib.int
    random: lib.random
    round-to-x-digits: lib.round-to-x-digits
    to-decimal: lib.to-decimal
    to-binary: lib.to-binary
    to-hex: lib.to-hex
    positive: lib.positive
    inc: lib.inc
    dec: lib.dec
    ONCE: lib.ONCE
    nothing: lib.nothing
    t: lib.t
    nil: lib.nil
    f: lib.f
    occurs: lib.occurs
    occurs-in: lib.occurs-in
    occurrences-of: lib.occurrences-of
    count-occurrences-in: lib.count-occurrences-in
    isJSON: lib.isJSON
    is-array: lib.is-array
    transpose: lib.transpose
    chunk: lib.chunk
    list: lib.list
    mapcar: lib.mapcar
    append: lib.append
    uniq: lib.uniq
    sorted: lib.sorted

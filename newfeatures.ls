require! {
    './index':{println,defconstant,say,list,append,str,defvar,clone}
    lodash:lodash
    'prelude-ls':{reverse}
}

(say str reverse list 1 2 3 4 5 6)

(say str reverse append do
    list 1 2 3 4
    list 5 6 7 8)

(defconstant \arr list 1 2 3 4 5 6)

(say reverse arr)

( defvar \newarr )

(newarr = clone arr)

(say newarr)

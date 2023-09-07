require! {
    './index':{println,defconstant,say,list,append,str,defvar,clone,sorted,uniq}
    lodash:lodash
    'prelude-ls':{reverse}
}

(say str reverse list 1 2 3 4 5 6)

(say do
    (append do
        list 1 2 3 4
        list 5 6 7 8)
        |> reverse
        |> str)

(defconstant \arr list 1 2 3 4 5 6)

(say reverse arr)

( defvar \newarr )

(newarr = list 1 2 3)

(say reverse sorted uniq append newarr, arr)


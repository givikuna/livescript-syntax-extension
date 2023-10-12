(lsse = require '../index')
(require! {
    'prelude-ls':{chars}
})

(lsse.lispify!)

(function reverse-int n
    (if n is 0
        (return n))
    (parse-int do
        (n
            |> str
            |> (.replace /0+$/ '')
            |> chars
            |> rev
            |> (.join ''))
        (10)))

# (function same-thing n
#    (rev n))

# (say reverse-int 95)

(say rev -45)

(say reverse-int -45)

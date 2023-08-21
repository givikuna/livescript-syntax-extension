require! {
    './index':{println,defmacro,define,flat-str,inc,dec,sleep}
}

(println (define \add (a, b) ->
    ((+ " #b") a)) \hi \mom! )

println ( [ \hello \world ]join ' ' )

(defmacro \sentencify (...a) ->
    a.join ' ')

(println (sentencify \hello \world! ))

(println flat-str [ 'heya' ['losers'] \image \ok ])

(println inc 1)

(println dec 1)

(println (+) 1 2)

(println (/) 6 3)

(sleep 2000)

(println (/) 6 3)

(println inc 1)

(println dec 1)

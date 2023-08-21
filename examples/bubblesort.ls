require! {
    '../index':{println,define,dec,inc,len}
    lodash:lodash
}


(println (define \Bubble-Sort (arr) ->
    (const n = len arr)
    (for i in [0 til n]
        (for j in [0 til dec ((- i) n)]
            (if arr[j] > arr[j + 1]
                (const temp = arr[j])
                (arr[j] = arr[inc j])
                (arr[inc j] = temp))))
    (arr)) [2 3 562 452 7])

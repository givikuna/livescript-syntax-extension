({
    defun
    print
    echo
    len
    lambda
} = require '../index')

({
    shuffle
} = require 'lodash')

(defun \Bubble-Sort (arr) ->
    (const n = len arr)
    (for i in [0 til n]
        (for j in [0 til (- i) (- 1) n]
            (if arr[j] > arr[j + 1]
                (const temp = arr[j])
                (arr[j] = arr[j + 1])
                (arr[j + 1] = temp))))
    (arr))

([0 til 10] |> shuffle
            |> Bubble-Sort
            |> echo)

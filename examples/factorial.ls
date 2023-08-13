({
    defun
    echo
} = require '../index')

(defun \Factorial (n) ->
    (if n in [0 1] then do
        (return 1))
    (n
        |> (- 1)
        |> Factorial
        |> (* n)))

(echo Factorial 5) #=> 120

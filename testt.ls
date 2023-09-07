require! {
    '../index':{println,define,dec,inc,len}
    'prelude-ls':{filter,map,even}
}

something = [1 to 5] |> map (^2) |> filter even |> fold (+), 0

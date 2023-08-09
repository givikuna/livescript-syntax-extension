(
    {
        map
    } = require 'prelude-ls'
)
({
    print
    len
    current-dir
    dir
    count-files
    count-directories
    str-to-title
    title
    is-not-blank
    is-blank
    is-numeric
    have-matching-values
    has-matching-values-with
    occurs
    occurs-in
    count-occurances
    count-occurances-in
    occurs-more-than
    occurs-less-than
    lower
    ONCE
    nothing
    NOTHING
    more-than
    less-than
    is-more-than
    is-less-than
    string-to-number
    int
    isJSON
    is-array
} = require './index')

print [1 2 3]length
print len [1 2 3]

print "current directory is #{current-dir!}\nand it has:\n#{dir!}"
print "the current directory has #{len dir!} items in it"
print "it has #{count-directories!} directorires"
print "it has #{count-files!} files"
print str-to-title "hello my friend"
print title "hello my friend"

print is-numeric \1.4 #=> true
print is-numeric \h2 #=> false
print have-matching-values [1 2 3] [2 3 4] #=> true
print [1 2] `has-matching-values-with` [3 4] #=> false
print occurs 1 \hello1 #=> true
print occurs true \heltruelo #=> true
print occurs \he \34 #=> false
print 2 `occurs-in` \23 #=> true
print count-occurances 2 \23 #=> 1
print 4 `count-occurances-in` \4443 #=> 3
print occurs-more-than 3 \123 1 #=> false
print occurs-less-than 3 \123 2 #=> true
print lower [ \A \B [ \C \D [ \E ] ] ] #=> [ 'a', 'b', [ 'c', 'd', [ 'e' ] ] ]
print more-than 1 2 #=> false
print less-than 1 2 #=> true
print 1 `is-more-than` 2 #=> false
print 1 `is-less-than` 2 #=> true
print string-to-number "3_000_333.2km" #=> 3000333.2
print string-to-number "3,000,345.46km" #=> 3000345.46
print string-to-number "3.000.345,46km" #=> 3000345.46
print string-to-number "3_000_000,3km" #=> 3000000.3
print string-to-number "3_345" #=> 3345
print string-to-number "-3,445,349.32" #=> -3445349.32


print map (int), ["3_000_333.2km" "3,000,345.46km" "3.000.345,46km" "3_000_000,3km" "12.3" "12." 12.3 35.5]
#=>
[
  3000333, 3000345,
  3000345, 3000000,
       12,      12,
       12,      35
]

print isJSON({ "hi": "3" }) #=> false (only works to tell you if a string can become a json)
print is-array([{ "hi": "3" }, 0]) #=> true

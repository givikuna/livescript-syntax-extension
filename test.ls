{
    print
    len
    dir
    is-file
    exists
    read-files
    read-directories
    input
    title
    bool
    int
    str
    round-to-x-digits
    scramble-array
    type-of
} = './lsse' |> require

print "#{len dir!} files and folders in this directory"

file-count = len read-files!
directory-count = len read-directories!

print "#{file-count} file#{do ->
    if file-count > 1 or file-count is 0 then return 's'; ''} and #{directory-count} director#{do ->
    if directory-count > 1 or directory-count is 0 then return 'ies'; 'y'}"

print exists \filename.txt #=> false

print typeof int '10'

print typeof str 100

print round-to-x-digits 1.45979 2

arr = [1 to 10]

print str arr

print len arr

scrambled-array = scramble-array arr

print str scrambled-array
print str arr

print len scrambled-array

print type-of 34
print type-of 1.2
print type-of [1, 3, 54]


first-name = input 'first name: '
last-name = input 'last name: '

print "hello #{first-name} #{last-name}!!"

print title 'all of the letters of this string have been capitalized'

{
    print
    len
    dir
    is-file
    exists
    read-files
    read-directories
    input
} = './lsse' |> require

print "#{len dir!} files and folders in this directory"

file-count = len read-files!
directory-count = len read-directories!

print "#{file-count} file#{do ->
    if file-count > 1 or file-count is 0 then return 's'; ''} and #{directory-count} director#{do ->
    if directory-count > 1 or directory-count is 0 then return 'ies'; 'y'}"

print exists \filename.txt #=> false

first-name = input 'first name: '
last-name = input 'last name: '

print "hello #{first-name} #{last-name}!!"

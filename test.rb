=begin

x = 80.0

puts (( x/2 ) **2 ) / 2
puts (x/2) ** 2 / 2
puts x/2 ** 2 / 2 # -> x/(2**2) / 2

x = (80.0/2)**2 /2
puts x
=end

def countertop1(x)
    square = x**2
    triangle = ((x/2) ** 2)/2
    return square - triangle
end

def countertop2(x)
    square = x**2
    triangle = (x/2) ** 2 / 2
    return square - triangle
end

def countertop3(x)
    square = x**2
    triangle = x / 2 ** 2 / 2
    return square - triangle
end

puts countertop1 8.0

puts countertop2 8.0

puts countertop3 8.0

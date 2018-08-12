dictionary = { 
  "one" => "eins",
  "two" => "zwei",
  "three" => "drei",
}

# literal constructor
pets = {
  "cat" => "Jasper",
  "dog" => "Oscar"
}

# Class constructor
other_pets = Hash.new
other_pets["cat"] = "William"
other_pets["dog"] = "Bailey"

puts pets["cat"]
puts other_pets["dog"]

puts dictionary["two"];
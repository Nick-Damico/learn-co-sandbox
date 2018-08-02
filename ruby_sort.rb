dishes = ["steak", "apple pie", "california salad", "lobster tail", "vegetable medley"]

# Low level use of the .sort Ruby Method using
# using if/else statements
puts dishes.sort do |a,b|
  if a == b 
     0 
  elsif a < b 
    1
  else
    -1
  end
end

# Abstraction of above code using the 'spaceship' operator
puts dishes.sort { |a,b| b <=> 1 }
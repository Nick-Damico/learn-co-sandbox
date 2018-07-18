def hamburger(toppings)
  toppings.each do |topping|
    puts "I will have #{topping} on my hamburger, please."
  end
  #implicit return of .each iterator this the original array
end

def hamburger_2(toppings)
  my_statements = []
  toppings.each do |topping|
    my_statements << "I will have #{topping} on my hamburger, please."
  end
  my_statements
end


hamburger(['pickles', 'bacon', 'mushrooms'])
# Demonstrating meta programming Accessors on Class definitions.

class Person
  attr_reader :name 
  attr_writer :name 
end

nick = Person.new 
nick.name = "Nick"
puts nick.name
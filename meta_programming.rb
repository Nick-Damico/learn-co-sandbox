# Demonstrating meta programming Accessors on Class definitions.

class Person
  attr_accessor :name
  attr_reader :age 
  
  def initialize(name="Nick",age=1)
  end
end

nick = Person.new 
nick.name = "Nick"
puts nick.name
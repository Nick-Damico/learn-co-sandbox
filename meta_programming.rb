# Demonstrating meta programming Accessors on Class definitions.

class Person
  attr_accessor :first_name, :last_name
  
  def initialize(first_name, last_name) 
    @first_name = first_name
    @last_name  = last_name
  end
  
  def name=(full_name)
    first_name, last_name = full_name.split
    @first_name = first_name
    @last_name  = last_name
  end
  
  def name
    "#{@first_name} #{@last_name}".strip
  end
end

nick = Person.new 
nick.name = "Nick"
puts nick.name
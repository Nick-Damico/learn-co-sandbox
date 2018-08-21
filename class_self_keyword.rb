# The self keyword inside the body of an instance method 
# to refer to the very same object the method is being called on 
class Cat 
  
  def initialize(name)
    @name = name  
  end
  
  def show_self 
      puts self
  end
end

jasper = Cat.new('Jasper')
jasper.show_self
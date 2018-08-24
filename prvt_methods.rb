class Bartender
  attr_accessor :name 
  
  BARTENDERS = []
  
  def initialize(name) 
    @name = name
    BARTENDERS << self
  end
  
  def self.all 
    BARTENDERS
  end
  
  def intro 
    "Hello, my name is #{name}!"
  end

def make_drink 
  @cocktail_ingredients = []
  choose_liquour
  choose_mixer
  choose_garnish
  return "Here is your drink. It contains #{@cocktail_ingredients}."
end

private

def choose_liquour
  @cocktail_ingredients.push("Whiskey")
end

def choose_mixer
  @cocktail_ingredients.push("vermouth")
end

def choose_garnish
  @cocktail_ingredients.push("olives")
end
end
patty = Bartender.new("Patty")
steph = Bartender.new("Steph")

Bartender.all.each { |b| puts b.name }


puts patty.make_drink

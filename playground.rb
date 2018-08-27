class Song 
  attr_accessor :name 
  
  @@all = []
  
  def initialize(name) 
    @name = name
    @@all << self
  end
  
  def self.all 
    @@all.each do |song|
      puts song.name
    end
  end
  
end

hotline_bling = Song.new("Hotline Bling")
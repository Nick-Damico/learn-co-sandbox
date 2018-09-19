connection = ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'db/students.sqlite'
  );
  
sql = <<-SQL 
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY,
    name TEXT
  )
SQL

ActiveRecord::Base.connection_execute(sql);

#Inherit ActiveRecord::Base 
class Student < ActiveRecord::Base 
end
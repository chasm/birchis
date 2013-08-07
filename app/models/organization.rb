class Organization
  include MongoMapper::Document

  key :name, String
  
  many :formats

end

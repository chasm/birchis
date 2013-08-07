class Format
  include MongoMapper::Document

  key :title, String
  key :starts_at_zero, Boolean
  key :scale, Array
  key :expectations, Array
  key :reasons, Array
  
  belongs_to :organization
  many :periods

end

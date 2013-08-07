class Period
  include MongoMapper::EmbeddedDocument

  key :name, String
  key :activity, String
  key :starts_at, Time
  key :ends_at, Time

end

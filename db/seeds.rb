User.destroy_all

User.create([
  {
    email: "joe@mama.com",
    password: "12345",
    password_confirmation: "12345"
  },
  {
    email: "jane@papa.com",
    password: "12345",
    password_confirmation: "12345"
  },
  {
    email: "timmy@baby.com",
    password: "12345",
    password_confirmation: "12345"
  }
])
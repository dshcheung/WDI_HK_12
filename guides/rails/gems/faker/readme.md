## Installation
add `gem 'faker'` to gemfile

## Usage
look at faker's [github](https://github.com/stympy/faker) for available commands you can use

## Examples in `db/seed.rb`
seed.rb is a file where you can create seed data in rails for your database. In other words, populate your database with real looking data

```ruby
10.times do |i|
  info = {
    toppings:      Array.new(3){Faker::SlackEmoji.food_and_drink.gsub(":")},
    sauce:         Faker::SlackEmoji.food_and_drink.gsub(":"),
    extra_cheese:  Faker::Boolean.boolean,
    extra_sauce:   Faker::Boolean.boolean
  }
  Pizza.create(info)
end

10.times do |i|
  password = Faker::Internet.password(8)
  info = {
    username:              Faker::Internet.user_name,
    password:              password,
    confirmation_password: password,
    email:                 Faker::Internet.email
  }
  User.create(info)
end
```

## Running the file
in your iTerm, type `rake db:seed` to start populating your database with the code you wrote

## For Heroku
`heroku run rake db:seed`
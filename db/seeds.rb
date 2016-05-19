10.times do

  Posting.create({
    name:           Faker::Name.name,
    email:          Faker::Internet.email,
    pet_type:       Faker::StarWars.specie,
    image_url:      Faker::Avatar.image,
    street_address: Faker::Address.street_address,
    city:           Faker::Address.city,
    state:          Faker::Address.state,
    zipcode:        Faker::Address.zip,
    start_date:     Faker::Date.forward(1),
    end_date:       Faker::Date.forward(23),
    is_sit_post:    1,
    is_stay_post:   rand(0..1)
    })

end
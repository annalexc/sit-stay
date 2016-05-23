10.times do

  Posting.create({
    name:           Faker::Name.name,
    email:          Faker::Internet.email,
    pet_type:       ['dog', 'cat', 'other'].sample,
    comments:       ["I'll be away for a few days and need someone to take care of my fluffball.","Anyone free to take care of my pet? She's the sweetest."].sample, 
    street_address: Faker::Address.street_address,
    city:           Faker::Address.city,
    state:          Faker::Address.state_abbr,
    zipcode:        Faker::Address.zip,
    start_date:     ['May 24, 2016', 'May 25, 2016', 'May 26, 2016'].sample,
    end_date:       ['June 1, 2016', 'June 2, 2016', 'June 3, 2016'].sample,
    is_stay_post:   rand(0..1)
    })

end
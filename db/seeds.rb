# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


ApplicationRecord.transaction do 
    puts "Destroying tables..."
    User.destroy_all
    Listing.destroy_all
  
    puts "Resetting primary keys..."
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('listings')
  
    puts "Creating users..."
    User.create!(
      email: 'demo@email.com', 
      password: 'Password1!'
    )
  
    10.times do 
      User.create!({
        email: Faker::Internet.unique.email,
        password: 'Password1!'
      }) 
    end

    Listing.create!({
      lister_id: 2,
      street_number: '39',
      street_address: "Tower St",
      unit_number: Faker::Address.secondary_address,
      city: 'New York',
      state: 'NY',
      zipcode: 10011,
      price: Faker::Number.between(from: 100000, to: 2000000),
      home_type: 'Condo',
      square_feet: Faker::Number.between(from: 1000, to: 3000),
      description: "Located in South Hell's Kitchen just a few steps from Hudson Yards is this 11th floor 1,800 sf home with rooms of generous proportion and high ceilings offering southern and western exposure views of Hudson Yards and the Iconic Red sign for  The Hotel New Yorker. Hardwood floors, walls of glass everywhere, 18' x 28' open living room/dining room, King Sized Primary bedroom with  exquisite 18' long primary bath with whirlpool tub and walk-in shower double vanity.  All closets are cedar lined. Small pantry and in unit laundry off kitchen. Second bedroom next to second full bath. Central air conditioning.  Fantastic rooftop deck with limitless views. Other added features include designated storage and a bike room. Close to Penn Station and mulitple Subway lines.  This custom built out co-op is available for immediate occupancy.",
      sale_type: "Sale",
      air_con: 'Central',
      year_built: 1950,
      num_baths: 2.5,
      num_beds: 2
    })

    Listing.create!({
      lister_id: 2,
      street_number: '342',
      street_address: "East 102nd St",
      city: 'New York',
      state: 'NY',
      zipcode: 10029,
      price: Faker::Number.between(from: 200000, to: 2000000),
      home_type: 'House',
      square_feet: Faker::Number.between(from: 1000, to: 3000),
      description: "Located in South Hell's Kitchen just a few steps from Hudson Yards is this 11th floor 1,800 sf home with rooms of generous proportion and high ceilings offering southern and western exposure views of Hudson Yards and the Iconic Red sign for  The Hotel New Yorker. Hardwood floors, walls of glass everywhere, 18' x 28' open living room/dining room, King Sized Primary bedroom with  exquisite 18' long primary bath with whirlpool tub and walk-in shower double vanity.  All closets are cedar lined. Small pantry and in unit laundry off kitchen. Second bedroom next to second full bath. Central air conditioning.  Fantastic rooftop deck with limitless views. Other added features include designated storage and a bike room. Close to Penn Station and mulitple Subway lines.  This custom built out co-op is available for immediate occupancy.",
      sale_type: "Sale",
      air_con: 'Central',
      year_built: 1973,
      num_baths: 3,
      num_beds: 3
    })

    Listing.create!({
      lister_id: 3,
      street_number: '101',
      street_address: "Park Ave",
      unit_number: Faker::Address.secondary_address,
      city: 'New York',
      state: 'NY',
      zipcode: 10016,
      price: Faker::Number.between(from: 3000, to: 6000),
      home_type: 'Apartment',
      square_feet: Faker::Number.between(from: 800, to: 2000),
      description: "Located in South Hell's Kitchen just a few steps from Hudson Yards is this 11th floor 1,800 sf home with rooms of generous proportion and high ceilings offering southern and western exposure views of Hudson Yards and the Iconic Red sign for  The Hotel New Yorker. Hardwood floors, walls of glass everywhere, 18' x 28' open living room/dining room, King Sized Primary bedroom with  exquisite 18' long primary bath with whirlpool tub and walk-in shower double vanity.  All closets are cedar lined. Small pantry and in unit laundry off kitchen. Second bedroom next to second full bath. Central air conditioning.  Fantastic rooftop deck with limitless views. Other added features include designated storage and a bike room. Close to Penn Station and mulitple Subway lines.  This custom built out co-op is available for immediate occupancy.",
      sale_type: "Rent",
      year_built: 1994,
      num_baths: 1.5,
      num_beds: 2
    })

    Listing.create!({
      lister_id: 3,
      street_number: '2',
      street_address: "West 77th St",
      unit_number: Faker::Address.secondary_address,
      city: 'New York',
      state: 'NY',
      zipcode: 10023,
      price: Faker::Number.between(from: 2000, to: 4000),
      home_type: 'Apartment',
      square_feet: Faker::Number.between(from: 800, to:1500),
      description: "Located in South Hell's Kitchen just a few steps from Hudson Yards is this 11th floor 1,800 sf home with rooms of generous proportion and high ceilings offering southern and western exposure views of Hudson Yards and the Iconic Red sign for  The Hotel New Yorker. Hardwood floors, walls of glass everywhere, 18' x 28' open living room/dining room, King Sized Primary bedroom with  exquisite 18' long primary bath with whirlpool tub and walk-in shower double vanity.  All closets are cedar lined. Small pantry and in unit laundry off kitchen. Second bedroom next to second full bath. Central air conditioning.  Fantastic rooftop deck with limitless views. Other added features include designated storage and a bike room. Close to Penn Station and mulitple Subway lines.  This custom built out co-op is available for immediate occupancy.",
      sale_type: "Rent",
      year_built: 1956,
      num_baths: 1,
      num_beds: 1
    })
    
    Listing.create!({
      lister_id: 4,
      street_number: '398',
      street_address: "East 52nd St",
      unit_number: Faker::Address.secondary_address,
      city: 'New York',
      state: 'NY',
      zipcode: 10022,
      price: Faker::Number.between(from: 3000, to: 6000),
      home_type: 'Condo',
      square_feet: Faker::Number.between(from: 800, to:1500),
      description: "Located in South Hell's Kitchen just a few steps from Hudson Yards is this 11th floor 1,800 sf home with rooms of generous proportion and high ceilings offering southern and western exposure views of Hudson Yards and the Iconic Red sign for  The Hotel New Yorker. Hardwood floors, walls of glass everywhere, 18' x 28' open living room/dining room, King Sized Primary bedroom with  exquisite 18' long primary bath with whirlpool tub and walk-in shower double vanity.  All closets are cedar lined. Small pantry and in unit laundry off kitchen. Second bedroom next to second full bath. Central air conditioning.  Fantastic rooftop deck with limitless views. Other added features include designated storage and a bike room. Close to Penn Station and mulitple Subway lines.  This custom built out co-op is available for immediate occupancy.",
      sale_type: "Rent",
      air_con: 'Central',
      year_built: 1948,
      num_baths: 1.5,
      num_beds: 2
    })

    Listing.create!({
      lister_id: 5,
      street_number: '180',
      street_address: "Central Park West",
      city: 'New York',
      state: 'NY',
      zipcode: 10024,
      price: Faker::Number.between(from: 4000000, to: 9000000),
      home_type: 'House',
      square_feet: Faker::Number.between(from: 2000, to: 5000),
      description: "Located in South Hell's Kitchen just a few steps from Hudson Yards is this 11th floor 1,800 sf home with rooms of generous proportion and high ceilings offering southern and western exposure views of Hudson Yards and the Iconic Red sign for  The Hotel New Yorker. Hardwood floors, walls of glass everywhere, 18' x 28' open living room/dining room, King Sized Primary bedroom with  exquisite 18' long primary bath with whirlpool tub and walk-in shower double vanity.  All closets are cedar lined. Small pantry and in unit laundry off kitchen. Second bedroom next to second full bath. Central air conditioning.  Fantastic rooftop deck with limitless views. Other added features include designated storage and a bike room. Close to Penn Station and mulitple Subway lines.  This custom built out co-op is available for immediate occupancy.",
      sale_type: "Sale",
      air_con: 'Central',
      year_built: 2023,
      num_baths: 2.5,
      num_beds: 3
    })

  
    puts "Done!"
  end
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"

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

listings = []

listings.push(Listing.create!({
  lister_id: 2,
  street_number: '456',
  street_address: "Lexington Ave",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10017,
  price: Faker::Number.between(from: 500, to: 3000) * 1000,
  home_type: 'Condo',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "Welcome to this luxurious condo in the heart of Midtown Manhattan! This stunning residence boasts floor-to-ceiling windows that offer breathtaking views of the city skyline. The spacious living room is perfect for entertaining guests, and the open layout allows for seamless flow between the living, dining, and kitchen areas. The modern kitchen features top-of-the-line appliances, sleek cabinetry, and a large center island with bar seating.

  The master suite is a true retreat, complete with a king-sized bed, a walk-in closet, and an en-suite bathroom with a deep soaking tub and a separate glass-enclosed shower. The second bedroom also has an en-suite bathroom and ample closet space. Both bedrooms have large windows that let in plenty of natural light.
  
  This condo also features a convenient in-unit washer and dryer, as well as central air conditioning and heating. Building amenities include a 24-hour doorman, a fitness center, and a landscaped rooftop terrace with panoramic views of the city.
  
  Located in the heart of Midtown Manhattan, this condo is just steps away from some of the city's best restaurants, shops, and cultural attractions. With easy access to public transportation, you can quickly and easily explore all that the city has to offer.
  
  Don't miss your chance to live in this stunning condo in one of the most coveted neighborhoods in New York City!",
  sale_type: "Sale",
  air_con: 'Central',
  year_built: 1950,
  num_baths: 2.5,
  num_beds: 2
}))

listings.push(Listing.create!({
  lister_id: 3,
  street_number: '759',
  street_address: "Fifth Ave",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10019,
  price: Faker::Number.between(from: 500, to: 3000) * 1000,
  home_type: 'Condo',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "Welcome to your new home in the heart of Midtown Manhattan! This modern and spacious apartment features an open floor plan with large windows that offer stunning views of the city skyline.

  As you enter the apartment, you'll be greeted by a spacious living room with plenty of natural light. The modern kitchen boasts stainless steel appliances, granite countertops, and plenty of cabinet space. The adjacent dining area is perfect for hosting dinner parties with friends and family.
  
  The master bedroom features a king-sized bed, a large closet, and an en-suite bathroom with a glass-enclosed shower. The second bedroom is equally spacious and offers plenty of closet space. A second full bathroom and a washer and dryer complete this stunning apartment.
  
  Building amenities include a 24-hour doorman, a fitness center, and a landscaped rooftop terrace with panoramic views of the city. With easy access to public transportation and some of the city's best restaurants, shopping, and cultural attractions just steps away, this apartment is perfect for anyone looking to experience all that New York City has to offer.
  
  Don't miss your chance to live in this stunning apartment in one of the most coveted neighborhoods in Manhattan!",
  sale_type: "Sale",
  air_con: 'Central',
  year_built: 1973,
  num_baths: 2,
  num_beds: 2
}))

listings.push(Listing.create!({
  lister_id: 3,
  street_number: '234',
  street_address: "West 42nd St",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10036,
  price: Faker::Number.between(from: 25, to: 70) * 100,
  home_type: 'Apartment',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "Located in South Hell's Kitchen just a few steps from Hudson Yards is this 11th floor 1,800 sf home with rooms of generous proportion and high ceilings offering southern and western exposure views of Hudson Yards and the Iconic Red sign for  The Hotel New Yorker. Hardwood floors, walls of glass everywhere, 18' x 28' open living room/dining room, King Sized Primary bedroom with  exquisite 18' long primary bath with whirlpool tub and walk-in shower double vanity.  All closets are cedar lined. Small pantry and in unit laundry off kitchen. Second bedroom next to second full bath. Central air conditioning.  Fantastic rooftop deck with limitless views. Other added features include designated storage and a bike room. Close to Penn Station and mulitple Subway lines.  This custom built out co-op is available for immediate occupancy.",
  sale_type: "Rent",
  year_built: 1994,
  num_baths: 1.5,
  num_beds: 2
}))


listings.push(Listing.create!({
  lister_id: 3,
  street_number: '567',
  street_address: "Eighth Ave",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10018,
  price: Faker::Number.between(from: 25, to: 70) * 100,
  home_type: 'Apartment',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "Welcome to your stylish and chic apartment in the heart of Midtown Manhattan! This stunning residence features an open-concept layout with floor-to-ceiling windows that offer breathtaking views of the city.

  The living room is perfect for relaxing and entertaining, with comfortable seating and a large flat-screen TV. The modern kitchen boasts top-of-the-line appliances, a sleek backsplash, and ample cabinet space.
  
  The bedroom features a queen-sized bed, plenty of closet space, and large windows that offer stunning views of the city. The bathroom features a glass-enclosed shower and luxurious finishes.
  
  Building amenities include a fitness center and a rooftop terrace with panoramic views of the city. With easy access to public transportation and some of the city's best restaurants, shopping, and cultural attractions just steps away, this apartment is perfect for anyone looking to experience all that New York City has to offer.
  
  Don't miss your chance to live in this stunning apartment in one of the most sought-after neighborhoods in Manhattan!",
  sale_type: "Rent",
  air_con: 'Window units',
  year_built: 1956,
  num_baths: 1,
  num_beds: 1
}))

listings.push(Listing.create!({
  lister_id: 4,
  street_number: '331',
  street_address: "Park Ave",
  city: 'New York',
  state: 'NY',
  zipcode: 10022,
  price: Faker::Number.between(from: 800, to: 4000) * 1000,
  home_type: 'House',
  square_feet: Faker::Number.between(from: 10, to: 40) * 100,
  description: "This stunning three-story townhouse is located in the heart of New York City, just steps away from all the excitement and convenience the city has to offer. With four bedrooms, three full bathrooms, and plenty of living space, this home is the perfect oasis in the middle of the bustling city.

  As you enter the home, you'll be greeted by a bright and airy living room with plenty of natural light streaming in through the windows. The open floor plan flows seamlessly into the dining area and kitchen, which features stainless steel appliances, granite countertops, and plenty of cabinet space for all your cooking needs.
  
  Upstairs, you'll find three spacious bedrooms, including a master suite with an en-suite bathroom and walk-in closet. The fourth bedroom is located on the lower level, along with a full bathroom and a large family room that's perfect for movie nights and entertaining guests.
  
  Outside, the home features a private backyard with plenty of space for outdoor dining, gardening, and relaxing in the sun. Other amenities include central air conditioning, hardwood floors throughout, and a washer/dryer for added convenience.
  
  Located in a vibrant neighborhood with easy access to public transportation, shopping, dining, and entertainment, this home is the perfect place to call your own in the city that never sleeps. Don't miss your chance to make this beautiful townhouse your new home!",
  sale_type: "Sale",
  air_con: 'Central',
  year_built: 1988,
  num_baths: 3,
  num_beds: 4
}))

listings.push(Listing.create!({
  lister_id: 5,
  street_number: '890',
  street_address: "Broadway",
  city: 'New York',
  state: 'NY',
  zipcode: 10003,
  price: Faker::Number.between(from: 800, to: 4000) * 1000,
  home_type: 'House',
  square_feet: Faker::Number.between(from: 10, to: 40) * 100,
  description: "This stylish townhouse in Midtown Manhattan offers the perfect blend of classic architecture and contemporary design. The open concept living area features a modern kitchen with top-of-the-line appliances, a spacious dining area, and a cozy living room with a gas fireplace. The master suite boasts a large walk-in closet and an en-suite bathroom with a soaking tub, while the other bedrooms are equally spacious and filled with natural light. The rooftop terrace offers stunning views of the city and is perfect for entertaining guests or relaxing in the sun. Additional features include hardwood floors throughout, high ceilings, and a finished basement with plenty of storage space.",
  sale_type: "Sale",
  air_con: 'Central',
  year_built: 2023,
  num_baths: 2.5,
  num_beds: 3
}))

listings.push(Listing.create!({
  lister_id: 6,
  street_number: '123',
  street_address: "West 57th St",
  city: 'New York',
  state: 'NY',
  zipcode: 10019,
  price: Faker::Number.between(from: 800, to: 4000) * 1000,
  home_type: 'House',
  square_feet: Faker::Number.between(from: 10, to: 40) * 100,
  description: "This beautifully renovated townhouse in the West Village offers the perfect blend of historic charm and modern convenience. The spacious living room features a decorative fireplace and plenty of space to relax, while the renovated kitchen is equipped with high-end appliances and a large island for entertaining. The master suite boasts a walk-in closet and an en-suite bathroom with a rainfall shower, while the other bedrooms are perfect for guests or a home office. The backyard offers a peaceful retreat from the city, with a patio and plenty of space for gardening or outdoor dining. Additional features include original hardwood floors, exposed brick walls, and a washer/dryer for added convenience.",
  sale_type: "Sale",
  air_con: 'Window units',
  year_built: 2023,
  num_baths: 2,
  num_beds: 2
}))

listings.push(Listing.create!({
  lister_id: 7,
  street_number: '456',
  street_address: "Seventh Ave",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10001,
  price: Faker::Number.between(from: 25, to: 70) * 100,
  home_type: 'Apartment',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "Welcome to your stunning and sophisticated apartment in the heart of Midtown Manhattan! This elegant residence boasts a spacious and open layout with modern finishes throughout.

  As you enter the apartment, you'll be greeted by a large living room with comfortable seating and a flat-screen TV. The modern kitchen features stainless steel appliances, granite countertops, and ample cabinet space. The adjacent dining area is perfect for hosting dinner parties with friends and family.
  
  The bedroom features a king-sized bed, plenty of closet space, and large windows that offer breathtaking views of the city. The bathroom boasts a glass-enclosed shower and luxurious finishes.
  
  Building amenities include a 24-hour doorman, a fitness center, and a rooftop terrace with panoramic views of the city. With easy access to public transportation and some of the city's best restaurants, shopping, and cultural attractions just steps away, this apartment is perfect for anyone looking to experience all that New York City has to offer.
  
  Don't miss your chance to live in this stunning apartment in one of the most desirable neighborhoods in Manhattan!",
  sale_type: "Rent",
  year_built: 1994,
  num_baths: 1,
  num_beds: 3
}))

listings.push(Listing.create!({
  lister_id: 7,
  street_number: '678',
  street_address: "Ninth Ave",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10036,
  price: Faker::Number.between(from: 25, to: 70) * 100,
  home_type: 'Apartment',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "This luxurious two-bedroom apartment is located in the heart of Manhattan, offering stunning views of the city skyline and all the modern amenities you could ask for. The spacious living room features floor-to-ceiling windows that flood the space with natural light, and the open kitchen is equipped with high-end appliances and a large island for entertaining. The bedrooms are both generously sized, with ample closet space, and the master suite boasts a spa-like en-suite bathroom. Additional features include a private balcony, hardwood floors throughout, and access to a full suite of building amenities, including a fitness center, rooftop lounge, and 24-hour concierge service.",
  sale_type: "Rent",
  year_built: 1944,
  num_baths: 1.5,
  num_beds: 2
}))

listings.push(Listing.create!({
  lister_id: 8,
  street_number: '345',
  street_address: "Madison Ave",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10017,
  price: Faker::Number.between(from: 500, to: 3000) * 1000,
  home_type: 'Condo',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "Welcome to your luxurious apartment in the heart of Midtown Manhattan! This stunning residence boasts high-end finishes and an open layout that offers plenty of natural light.

  The living room features comfortable seating, a flat-screen TV, and large windows that offer stunning views of the city. The modern kitchen boasts stainless steel appliances, granite countertops, and plenty of cabinet space. The adjacent dining area is perfect for hosting dinner parties with friends and family.
  
  The bedroom features a king-sized bed, a walk-in closet, and an en-suite bathroom with a glass-enclosed shower and luxurious finishes. A second full bathroom and a washer and dryer complete this stunning apartment.
  
  Building amenities include a 24-hour doorman, a fitness center, and a landscaped rooftop terrace with panoramic views of the city. With easy access to public transportation and some of the city's best restaurants, shopping, and cultural attractions just steps away, this apartment is perfect for anyone looking to experience all that New York City has to offer.
  
  Don't miss your chance to live in this stunning apartment in one of the most coveted neighborhoods in Manhattan!",
  sale_type: "Sale",
  air_con: 'Central',
  year_built: 2007,
  num_baths: 1.5,
  num_beds: 1
}))

listings.push(Listing.create!({
  lister_id: 9,
  street_number: '901',
  street_address: "Sixth Ave",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10001,
  price: Faker::Number.between(from: 500, to: 3000) * 1000,
  home_type: 'Condo',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "Located in South Hell's Kitchen just a few steps from Hudson Yards is this 11th floor 1,800 sf home with rooms of generous proportion and high ceilings offering southern and western exposure views of Hudson Yards and the Iconic Red sign for  The Hotel New Yorker. Hardwood floors, walls of glass everywhere, 18' x 28' open living room/dining room, King Sized Primary bedroom with  exquisite 18' long primary bath with whirlpool tub and walk-in shower double vanity.  All closets are cedar lined. Small pantry and in unit laundry off kitchen. Second bedroom next to second full bath. Central air conditioning.  Fantastic rooftop deck with limitless views. Other added features include designated storage and a bike room. Close to Penn Station and mulitple Subway lines.  This custom built out co-op is available for immediate occupancy.",
  sale_type: "Sale",
  air_con: 'Central',
  year_built: 2007,
  num_baths: 2.5,
  num_beds: 2
}))

listings.each_with_index do |listing, idx|
  listing.images.attach(io: URI.open("https://zilloh-seeds.s3.us-east-2.amazonaws.com/listing_#{idx + 1}.jpg"), filename: "listing_#{idx+1}.jpg")
  listing.images.attach(io: URI.open("https://zilloh-seeds.s3.us-east-2.amazonaws.com/Bedroom/bed_#{1001 + idx}.jpg"), filename: "bed_#{1001 + idx}.jpg")
  listing.images.attach(io: URI.open("https://zilloh-seeds.s3.us-east-2.amazonaws.com/Kitchen/kitchen_#{1001 + idx}.jpg"), filename: "kitchen_#{1001 + idx}.jpg")
  listing.images.attach(io: URI.open("https://zilloh-seeds.s3.us-east-2.amazonaws.com/Livingroom/living_#{1001 + idx}.jpg"), filename: "living_#{1001 + idx}.jpg")
  listing.images.attach(io: URI.open("https://zilloh-seeds.s3.us-east-2.amazonaws.com/Bathroom/bath_#{1001 + idx}.jpg"), filename: "bath_#{1001 + idx}.jpg")
end

puts "Done!"

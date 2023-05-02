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
ApplicationRecord.connection.reset_pk_sequence!('favorites')

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

listings.push(Listing.create!({
  lister_id: 1,
  street_number: '162',
  street_address: "West 4th St",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10014,
  price: Faker::Number.between(from: 500, to: 3000) * 1000,
  home_type: 'Condo',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "Welcome to your new home in the heart of the West Village! This stunning apartment boasts a spacious and bright living room, perfect for entertaining guests or relaxing after a long day. The high ceilings and large windows flood the space with natural light, creating a warm and inviting atmosphere.

  The apartment features a fully-equipped kitchen with modern stainless steel appliances, including a dishwasher and microwave. You'll love cooking and entertaining in this beautiful space, with ample counter space and plenty of storage.
  
  The bedroom is generously sized and features a large closet with built-in organizers, ensuring that you'll have plenty of space for all your clothes and belongings. The apartment also includes a beautiful modern bathroom with a walk-in shower and elegant finishes.
  
  This historic building is situated in the heart of the West Village, one of the most sought-after neighborhoods in New York City. You'll be just steps away from some of the city's best restaurants, cafes, and shops, as well as beautiful parks and landmarks.
  
  Don't miss out on this amazing opportunity to live in the West Village! Contact us today to schedule a viewing.",
  sale_type: "Sale",
  year_built: 1950,
  num_baths: 1,
  num_beds: 1
}))

listings.push(Listing.create!({
  lister_id: 1,
  street_number: '66',
  street_address: "East 7th St",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10003,
  price: Faker::Number.between(from: 25, to: 70) * 100,
  home_type: 'Apartment',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "This beautifully renovated 2-bedroom apartment offers a cozy and comfortable living space, perfect for couples or roommates.

  The apartment features a spacious and sunny living room, perfect for relaxing or entertaining guests. The open-plan layout flows seamlessly into the fully-equipped kitchen, featuring modern stainless steel appliances, including a dishwasher and microwave, as well as ample counter space and storage.
  
  Both bedrooms are generously sized and offer plenty of space for everyone. Each bedroom features large windows that let in plenty of natural light, creating a warm and inviting atmosphere. The modern bathroom features elegant finishes and a shower/tub combination.
  
  This charming building is situated in the heart of the East Village, one of the most vibrant and eclectic neighborhoods in New York City. You'll be just steps away from some of the city's best restaurants, cafes, and shops, as well as beautiful parks and landmarks.
  
  Don't miss out on this amazing opportunity to live in the East Village! Contact us today to schedule a viewing.",
  sale_type: "Rent",
  year_built: 1940,
  num_baths: 1.5,
  num_beds: 2
}))

listings.push(Listing.create!({
  lister_id: 2,
  street_number: '301',
  street_address: "East 9th St",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10003,
  price: Faker::Number.between(from: 25, to: 70) * 100,
  home_type: 'Apartment',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "Welcome to your new home in the vibrant East Village! This beautifully renovated 3-bedroom apartment offers a spacious and stylish living space, perfect for families or roommates.

  The apartment features a large and sunny living room, perfect for entertaining guests or relaxing with friends and family. The open-plan layout flows seamlessly into the fully-equipped kitchen, featuring modern stainless steel appliances, including a dishwasher and microwave, as well as ample counter space and storage.
  
  The three bedrooms are generously sized and offer plenty of space for everyone. Each bedroom features large windows that let in plenty of natural light, creating a warm and inviting atmosphere. The master bedroom includes a beautiful en-suite bathroom, complete with a walk-in shower and elegant finishes. The other two bedrooms share a modern and stylish bathroom, with plenty of space for everyone.
  
  This stunning building is situated in the heart of the East Village, one of the most vibrant neighborhoods in New York City. You'll be just steps away from some of the city's best restaurants, cafes, and shops, as well as beautiful parks and landmarks.
  
  Don't miss out on this amazing opportunity to live in the East Village! Contact us today to schedule a viewing.",
  sale_type: "Rent",
  year_built: 1956,
  num_baths: 1,
  num_beds: 3
}))

listings.push(Listing.create!({
  lister_id: 3,
  street_number: '117',
  street_address: "West 10th St",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10011,
  price: Faker::Number.between(from: 25, to: 70) * 100,
  home_type: 'Apartment',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "This spacious and beautifully renovated 3-bedroom apartment is perfect for families or roommates looking for a comfortable and stylish living space.

  The apartment features a large and bright living room, perfect for entertaining guests or relaxing with friends and family. The open-plan layout flows seamlessly into the fully-equipped kitchen, featuring modern stainless steel appliances, including a dishwasher and microwave, as well as ample counter space and storage.
  
  The three bedrooms are generously sized and feature large windows that let in plenty of natural light. The master bedroom includes a beautiful en-suite bathroom, complete with a walk-in shower and elegant finishes. The other two bedrooms share a modern and stylish bathroom, with plenty of space for everyone.
  
  This historic building is situated in the heart of the West Village, one of the most sought-after neighborhoods in New York City. You'll be just steps away from some of the city's best restaurants, cafes, and shops, as well as beautiful parks and landmarks.
  
  Don't miss out on this amazing opportunity to live in the West Village! Contact us today to schedule a viewing.",
  sale_type: "Rent",
  year_built: 1920,
  num_baths: 1.5,
  num_beds: 3
}))

listings.push(Listing.create!({
  lister_id: 1,
  street_number: '57',
  street_address: "Wall St",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10005,
  price: Faker::Number.between(from: 500, to: 3000) * 1000,
  home_type: 'Condo',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "Welcome to your new home in the heart of the Financial District! This charming and cozy studio apartment is perfect for anyone looking for a convenient and affordable living space in the heart of the city.

  The apartment features an open-plan layout that maximizes the space available, creating a comfortable and practical living area. The kitchenette is fully equipped with modern appliances, including a refrigerator and stove, as well as plenty of storage space.
  
  The living area is bright and welcoming, with large windows that let in plenty of natural light, creating a warm and inviting atmosphere. The modern bathroom features elegant finishes and a shower/tub combination.
  
  This historic building is situated in the heart of the Financial District, one of the most exciting and dynamic neighborhoods in New York City. You'll be just steps away from some of the city's best restaurants, cafes, and shops, as well as beautiful parks and landmarks.
  
  Don't miss out on this amazing opportunity to live in the Financial District! Contact us today to schedule a viewing.",
  sale_type: "Sale",
  year_built: 1946,
  num_baths: 1,
  num_beds: 2
}))

listings.push(Listing.create!({
  lister_id: 4,
  street_number: '11',
  street_address: "Fulton St",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10038,
  price: Faker::Number.between(from: 25, to: 70) * 100,
  home_type: 'Apartment',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "This charming and cozy studio apartment is perfect for anyone looking for a unique and stylish living space in one of the most exciting neighborhoods in the city.

  The apartment features a cleverly designed open-plan layout that maximizes the available space, creating a comfortable and practical living area. The kitchenette is fully equipped with modern appliances, including a refrigerator and stove, as well as plenty of storage space. The living area is bright and welcoming, with large windows that let in plenty of natural light, and a stylish Murphy bed that can be easily tucked away during the day to create more space.
  
  The apartment also features a stylish and modern bathroom, with elegant finishes and a walk-in shower.
  
  This charming building is situated in the heart of the Financial District, one of the most vibrant and dynamic neighborhoods in New York City. You'll be just steps away from some of the city's best restaurants, cafes, and shops, as well as beautiful parks and landmarks.
  
  Don't miss out on this amazing opportunity to live in the Financial District! Contact us today to schedule a viewing.",
  sale_type: "Rent",
  year_built: 1965,
  num_baths: 1,
  num_beds: 1
}))

listings.push(Listing.create!({
  lister_id: 4,
  street_number: '17',
  street_address: "Battery Pl",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10004,
  price: Faker::Number.between(from: 500, to: 3000) * 1000,
  home_type: 'Condo',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "This spacious and elegant one-bedroom apartment is perfect for anyone looking for a luxurious living space in one of the most exciting neighborhoods in the city.

  The apartment features a spacious and bright living room, perfect for relaxing or entertaining guests. The open-plan layout flows seamlessly into the fully-equipped kitchen, featuring modern stainless steel appliances, including a dishwasher and microwave, as well as ample counter space and storage.
  
  The generously sized bedroom is the perfect retreat after a long day, featuring large windows that let in plenty of natural light and a comfortable queen-size bed. The modern bathroom features elegant finishes and a shower/tub combination.
  
  This stunning building offers residents a wealth of amenities, including a state-of-the-art fitness center, a beautiful rooftop terrace with panoramic city views, and a 24-hour doorman and concierge service.
  
  Located in the heart of the Financial District, you'll be just steps away from some of the city's best restaurants, cafes, and shops, as well as beautiful parks and landmarks. With easy access to public transportation, including several subway lines and buses, this is the perfect location for anyone looking to experience the best of New York City.
  
  Don't miss out on this amazing opportunity to live in luxury in the Financial District! Contact us today to schedule a viewing.",
  sale_type: "Sale",
  year_built: 2002,
  num_baths: 1,
  num_beds: 1
}))

listings.push(Listing.create!({
  lister_id: 2,
  street_number: '66',
  street_address: "Greene St",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10012,
  price: Faker::Number.between(from: 25, to: 70) * 100,
  home_type: 'Apartment',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "This stunning and spacious two-bedroom apartment is the epitome of luxury living in one of the most sought-after neighborhoods in New York City.

  As you enter the apartment, you'll be struck by the high ceilings and beautiful hardwood floors that flow throughout the space. The living room is bright and airy, with large windows that let in plenty of natural light, creating a warm and inviting atmosphere. The modern kitchen features sleek stainless steel appliances, including a refrigerator, dishwasher, and range, as well as plenty of counter space and storage.
  
  The master bedroom is a true oasis, featuring a king-size bed, ample closet space, and an en-suite bathroom with a luxurious walk-in shower. The second bedroom is perfect for guests or as a home office, with a comfortable queen-size bed and plenty of natural light. The apartment also features a second full bathroom with elegant finishes and a bathtub.
  
  This stunning building offers residents a wealth of amenities, including a fitness center, a beautiful rooftop terrace with breathtaking city views, and a 24-hour doorman and concierge service.
  
  Located in the heart of SoHo, you'll be surrounded by some of the best restaurants, cafes, and shops the city has to offer, as well as world-class galleries and cultural landmarks. With easy access to public transportation, including several subway lines and buses, this is the perfect location for anyone looking to experience the best of New York City.
  
  Don't miss out on this incredible opportunity to live in luxury in the heart of SoHo! Contact us today to schedule a viewing.",
  sale_type: "Rent",
  year_built: 1927,
  num_baths: 1,
  num_beds: 2
}))

listings.push(Listing.create!({
  lister_id: 6,
  street_number: '446',
  street_address: "Broadway",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10013,
  price: Faker::Number.between(from: 25, to: 70) * 100,
  home_type: 'Apartment',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "This beautifully designed one-bedroom apartment is the perfect retreat for anyone looking for a stylish and comfortable living space in one of the most vibrant neighborhoods in New York City.

  As you enter the apartment, you'll be immediately struck by the high ceilings and beautiful hardwood floors that give the space a warm and inviting feel. The open-plan living area is bright and spacious, with large windows that let in plenty of natural light, creating a welcoming atmosphere perfect for entertaining guests or relaxing after a long day.
  
  The modern kitchen is fully equipped with stainless steel appliances, including a refrigerator, dishwasher, and stove, as well as plenty of counter space and storage. The generously sized bedroom features a comfortable queen-size bed and ample closet space, as well as large windows that let in plenty of natural light.
  
  The apartment also features a modern bathroom with elegant finishes and a walk-in shower.
  
  This stunning building offers residents a variety of amenities, including a state-of-the-art fitness center, a beautifully landscaped rooftop terrace with panoramic views of the city, and a 24-hour doorman and concierge service.
  
  Located in the heart of SoHo, you'll be just steps away from some of the best restaurants, cafes, and shops in the city, as well as world-class galleries and cultural landmarks. With easy access to public transportation, including several subway lines and buses, this is the perfect location for anyone looking to experience the best of New York City.
  
  Don't miss out on this amazing opportunity to live in luxury in the heart of SoHo! Contact us today to schedule a viewing.",
  sale_type: "Rent",
  year_built: 1980,
  num_baths: 1,
  num_beds: 1
}))

listings.push(Listing.create!({
  lister_id: 6,
  street_number: '59',
  street_address: "Canal St",
  unit_number: Faker::Address.secondary_address,
  city: 'New York',
  state: 'NY',
  zipcode: 10002,
  price: Faker::Number.between(from: 25, to: 70) * 100,
  home_type: 'Apartment',
  square_feet: Faker::Number.between(from: 5, to: 30) * 100,
  description: "Welcome to your new home in the heart of vibrant Chinatown! This charming studio apartment is the perfect place to experience all that this unique neighborhood has to offer.

  As you enter the apartment, you'll be greeted by an open and inviting space that features beautiful hardwood floors and plenty of natural light. The living area is spacious and comfortable, with enough room for a bed, couch, and other furnishings. The kitchen features modern appliances, including a refrigerator and stove, as well as plenty of counter space and storage.
  
  The apartment also features a modern bathroom with elegant finishes and a walk-in shower.
  
  This historic building offers residents a variety of amenities, including a secure entry, on-site laundry facilities, and a beautifully landscaped courtyard that provides a peaceful retreat from the hustle and bustle of the city.
  
  Located in the heart of Chinatown, you'll be surrounded by a diverse array of restaurants, cafes, and shops that offer some of the best cuisine and shopping in the city. With easy access to public transportation, including several subway lines and buses, this is the perfect location for anyone looking to experience the best of New York City.
  
  Don't miss out on this amazing opportunity to live in one of the most unique and exciting neighborhoods in the city! Contact us today to schedule a viewing.",
  sale_type: "Rent",
  year_built: 1932,
  num_baths: 1,
  num_beds: 1
}))

listings.push(Listing.create!({
  lister_id: 7,
  street_number: '321',
  street_address: "Adams St",
  city: 'Hoboken',
  state: 'NJ',
  zipcode: "07030",
  price: Faker::Number.between(from: 500, to: 3000) * 1000,
  home_type: 'House',
  square_feet: Faker::Number.between(from: 10, to: 40) * 100,
  description: "This beautifully renovated three-story house offers the perfect blend of historic charm and modern amenities, making it the perfect place for anyone looking for a unique and comfortable living space.

  As you enter the house, you'll be immediately struck by the stunning original details, including hardwood floors, crown molding, and a beautiful fireplace that serves as the centerpiece of the living room. The spacious living area is perfect for entertaining guests or relaxing after a long day, and features large windows that let in plenty of natural light.
  
  The modern kitchen is fully equipped with stainless steel appliances, including a refrigerator, dishwasher, and gas stove, as well as plenty of counter space and storage. The adjacent dining area is perfect for hosting dinner parties or enjoying a quiet meal with family.
  
  The house features four generously sized bedrooms, each with plenty of closet space and large windows that provide stunning views of the neighborhood. The master bedroom features a beautiful en-suite bathroom with elegant finishes and a large walk-in shower.
  
  The house also features a spacious rooftop deck that provides a peaceful retreat from the hustle and bustle of the city, and offers panoramic views of Hoboken and the surrounding area.
  
  Located in the heart of Hoboken, you'll be just steps away from some of the best restaurants, cafes, and shops in the city, as well as world-class parks and cultural landmarks. With easy access to public transportation, including several bus routes and the PATH train, this is the perfect location for anyone looking to experience the best of New Jersey.
  
  Don't miss out on this amazing opportunity to live in luxury in one of the most desirable neighborhoods in Hoboken! Contact us today to schedule a viewing.",
  sale_type: "Sale",
  year_built: 1972,
  num_baths: 2,
  num_beds: 4
}))

listings.push(Listing.create!({
  lister_id: 7,
  street_number: '95',
  street_address: "River St",
  city: 'Hoboken',
  state: 'NJ',
  zipcode: "07030",
  price: Faker::Number.between(from: 25, to: 70) * 100,
  home_type: 'House',
  square_feet: Faker::Number.between(from: 10, to: 40) * 100,
  description: "Experience the best of Hoboken living in this stunning four-story house that combines classic architecture with modern comfort. This beautiful home offers the perfect blend of spacious living areas and private retreats, making it the ideal choice for anyone looking for a luxurious living experience.

  As you enter the house, you'll be greeted by a grand foyer with beautiful hardwood floors and stunning architectural details. The spacious living area features a large bay window that provides plenty of natural light, as well as a beautiful fireplace that serves as the centerpiece of the room.
  
  The modern kitchen is fully equipped with stainless steel appliances, including a refrigerator, dishwasher, and gas stove, as well as plenty of counter space and storage. The adjacent dining area features beautiful built-in shelving and plenty of space for hosting dinner parties or enjoying a quiet meal with family.
  
  The house features five generously sized bedrooms, each with its own unique charm and plenty of closet space. The master bedroom features a beautiful en-suite bathroom with elegant finishes, a large walk-in shower, and a separate soaking tub.
  
  The house also features a spacious rooftop deck with stunning views of the Manhattan skyline, as well as a beautiful backyard that provides the perfect retreat from the city.
  
  Located in the heart of Hoboken, you'll be just steps away from some of the best restaurants, cafes, and shops in the city, as well as world-class parks and cultural landmarks. With easy access to public transportation, including several bus routes and the PATH train, this is the perfect location for anyone looking to experience the best of New Jersey.
  
  Don't miss out on this amazing opportunity to live in luxury in one of the most desirable neighborhoods in Hoboken! Contact us today to schedule a viewing.",
  sale_type: "Rent",
  year_built: 1952,
  num_baths: 2.5,
  num_beds: 5
}))

listings.push(Listing.create!({
  lister_id: 8,
  street_number: '815',
  street_address: "Willow Ave",
  city: 'Hoboken',
  state: 'NJ',
  zipcode: "07030",
  price: Faker::Number.between(from: 500, to: 3000) * 1000,
  home_type: 'Condo',
  square_feet: Faker::Number.between(from: 10, to: 40) * 100,
  description: "Welcome to your beautiful new condo in Hoboken! This stunning space offers the perfect blend of modern comfort and convenience, making it the perfect place for anyone looking for a comfortable and stylish living experience.

  As you enter the condo, you'll be immediately struck by the beautiful hardwood floors, high ceilings, and modern finishes throughout. The spacious living area is perfect for entertaining guests or relaxing after a long day, and features large windows that let in plenty of natural light.
  
  The modern kitchen is fully equipped with stainless steel appliances, including a refrigerator, dishwasher, and gas stove, as well as plenty of counter space and storage. The adjacent dining area is perfect for hosting dinner parties or enjoying a quiet meal with family.
  
  The condo features two generously sized bedrooms, each with plenty of closet space and large windows that provide stunning views of the neighborhood. The master bedroom features a beautiful en-suite bathroom with elegant finishes and a large walk-in shower.
  
  The condo also features a private balcony that provides a peaceful retreat from the hustle and bustle of the city, and offers stunning views of Hoboken and the surrounding area.
  
  Located in the heart of Hoboken, you'll be just steps away from some of the best restaurants, cafes, and shops in the city, as well as world-class parks and cultural landmarks. With easy access to public transportation, including several bus routes and the PATH train, this is the perfect location for anyone looking to experience the best of New Jersey.
  
  Don't miss out on this amazing opportunity to live in luxury in one of the most desirable neighborhoods in Hoboken! Contact us today to schedule a viewing.",
  sale_type: "Sale",
  year_built: 1990,
  num_baths: 1.5,
  num_beds: 2
}))

listings.push(Listing.create!({
  lister_id: 6,
  street_number: '125',
  street_address: "1st st",
  city: 'Jersey City',
  state: 'NJ',
  zipcode: "07302",
  price: Faker::Number.between(from: 500, to: 3000) * 1000,
  home_type: 'Condo',
  square_feet: Faker::Number.between(from: 10, to: 40) * 100,
  description: "This stunning two-bedroom condo offers the perfect blend of modern design and urban living, making it the ideal choice for anyone looking for a comfortable and stylish living space.

  As you enter the condo, you'll be immediately struck by the open and airy layout, with large windows that let in plenty of natural light. The spacious living area is perfect for entertaining guests or relaxing after a long day, and features beautiful hardwood floors and a modern fireplace.
  
  The sleek and modern kitchen is fully equipped with stainless steel appliances, including a refrigerator, dishwasher, and gas stove, as well as plenty of counter space and storage. The adjacent dining area is perfect for hosting dinner parties or enjoying a quiet meal with family.
  
  The condo features two generously sized bedrooms, each with its own unique charm and plenty of closet space. The master bedroom features a beautiful en-suite bathroom with elegant finishes and a large walk-in shower.
  
  The condo also features a private balcony that provides stunning views of the city, as well as access to a shared rooftop deck that offers panoramic views of Jersey City and the surrounding area.
  
  Located in the heart of Jersey City, you'll be just steps away from some of the best restaurants, cafes, and shops in the city, as well as world-class parks and cultural landmarks. With easy access to public transportation, including several bus routes and the PATH train, this is the perfect location for anyone looking to experience the best of New Jersey.
  
  Don't miss out on this amazing opportunity to live in luxury in one of the most desirable neighborhoods in Jersey City! Contact us today to schedule a viewing.",
  sale_type: "Sale",
  year_built: 2010,
  num_baths: 1.5,
  num_beds: 2
}))

listings.push(Listing.create!({
  lister_id: 1,
  street_number: '123',
  street_address: "Greenpoint Ave",
  city: 'Brooklyn',
  state: 'NY',
  zipcode: "11222",
  price: Faker::Number.between(from: 25, to: 70) * 100,
  home_type: 'House',
  square_feet: Faker::Number.between(from: 10, to: 40) * 100,
  description: "Welcome to your charming new home in the heart of Greenpoint! This beautiful three-bedroom house offers the perfect combination of classic style and modern amenities, making it the ideal choice for anyone looking for a comfortable and inviting living space.

  As you enter the house, you'll be immediately struck by the open and airy layout, with large windows that let in plenty of natural light. The spacious living area is perfect for relaxing or entertaining guests, and features beautiful hardwood floors, a cozy fireplace, and plenty of comfortable seating.
  
  The updated kitchen is fully equipped with stainless steel appliances, including a refrigerator, dishwasher, and gas range, as well as ample counter space and storage. The adjacent dining area is perfect for enjoying meals with family and friends.
  
  The house features three generously sized bedrooms, each with its own unique charm and plenty of closet space. The master bedroom is especially spacious and features a comfortable king-sized bed and a large walk-in closet. All three bedrooms are located on the second floor for privacy and convenience.
  
  The house also features a private backyard that's perfect for enjoying the outdoors or hosting a summer BBQ. And with easy access to some of the best parks, restaurants, and shops in Greenpoint, you'll have everything you need just steps from your front door.
  
  Located in one of the most desirable neighborhoods in Brooklyn, this house is just a short walk from the Greenpoint Avenue subway station, providing easy access to Manhattan and other parts of the city. With all of these amazing features and so much more, this is the perfect rental for anyone looking for the ultimate Brooklyn lifestyle. Contact us today to schedule a viewing!",
  sale_type: "Rent",
  year_built: 1954,
  num_baths: 1.5,
  num_beds: 3
}))

listings.push(Listing.create!({
  lister_id: 3,
  street_number: '456',
  street_address: "Manhattan Ave",
  city: 'Brooklyn',
  state: 'NY',
  zipcode: "11222",
  price: Faker::Number.between(from: 500, to: 3000) * 1000,
  home_type: 'House',
  square_feet: Faker::Number.between(from: 10, to: 40) * 100,
  description: "Welcome to your stunning new home in the heart of Greenpoint! This gorgeous four-bedroom house offers the perfect blend of classic elegance and modern convenience, making it the ideal choice for anyone looking for a luxurious and spacious living space.

  As you step inside the house, you'll be immediately struck by the stunning details and finishes, from the beautiful hardwood floors to the soaring ceilings and elegant moldings. The spacious living area is perfect for entertaining guests or relaxing after a long day, and features a cozy fireplace and plenty of comfortable seating.
  
  The gourmet kitchen is a chef's dream, with top-of-the-line stainless steel appliances, including a refrigerator, gas range, and dishwasher, as well as plenty of counter space and storage. The adjacent dining area is perfect for hosting dinner parties or enjoying a quiet meal with family.
  
  The house features four generously sized bedrooms, each with its own unique charm and plenty of closet space. The master bedroom is especially luxurious, with a king-sized bed, a beautiful en-suite bathroom with a soaking tub and separate shower, and a large walk-in closet.
  
  The house also features a private backyard that's perfect for enjoying the outdoors or hosting a summer BBQ. And with easy access to some of the best parks, restaurants, and shops in Greenpoint, you'll have everything you need just steps from your front door.
  
  Located in one of the most desirable neighborhoods in Brooklyn, this house is just a short walk from the Greenpoint Avenue subway station, providing easy access to Manhattan and other parts of the city. With all of these amazing features and so much more, this is the perfect rental for anyone looking for the ultimate Brooklyn lifestyle. Contact us today to schedule a viewing!",
  sale_type: "Sale",
  year_built: 1987,
  num_baths: 2.5,
  num_beds: 4
}))

listings.push(Listing.create!({
  lister_id: 5,
  street_number: '456',
  street_address: "Manhattan Ave",
  city: 'Brooklyn',
  state: 'NY',
  zipcode: "11222",
  price: Faker::Number.between(from: 500, to: 3000) * 1000,
  home_type: 'House',
  square_feet: Faker::Number.between(from: 10, to: 40) * 100,
  description: "Welcome to your stunning new home in the heart of Greenpoint! This gorgeous four-bedroom house offers the perfect blend of classic elegance and modern convenience, making it the ideal choice for anyone looking for a luxurious and spacious living space.

  As you step inside the house, you'll be immediately struck by the stunning details and finishes, from the beautiful hardwood floors to the soaring ceilings and elegant moldings. The spacious living area is perfect for entertaining guests or relaxing after a long day, and features a cozy fireplace and plenty of comfortable seating.
  
  The gourmet kitchen is a chef's dream, with top-of-the-line stainless steel appliances, including a refrigerator, gas range, and dishwasher, as well as plenty of counter space and storage. The adjacent dining area is perfect for hosting dinner parties or enjoying a quiet meal with family.
  
  The house features four generously sized bedrooms, each with its own unique charm and plenty of closet space. The master bedroom is especially luxurious, with a king-sized bed, a beautiful en-suite bathroom with a soaking tub and separate shower, and a large walk-in closet.
  
  The house also features a private backyard that's perfect for enjoying the outdoors or hosting a summer BBQ. And with easy access to some of the best parks, restaurants, and shops in Greenpoint, you'll have everything you need just steps from your front door.
  
  Located in one of the most desirable neighborhoods in Brooklyn, this house is just a short walk from the Greenpoint Avenue subway station, providing easy access to Manhattan and other parts of the city. With all of these amazing features and so much more, this is the perfect rental for anyone looking for the ultimate Brooklyn lifestyle. Contact us today to schedule a viewing!",
  sale_type: "Sale",
  year_built: 1944,
  num_baths: 2.5,
  num_beds: 4
}))

listings.push(Listing.create!({
  lister_id: 5,
  street_number: '136',
  street_address: "North 10th St",
  city: 'Brooklyn',
  state: 'NY',
  zipcode: "11249",
  price: Faker::Number.between(from: 500, to: 3000) * 1000,
  home_type: 'House',
  square_feet: Faker::Number.between(from: 10, to: 40) * 100,
  description: "This stunning property boasts a unique blend of modern luxury and historic charm that is sure to captivate you from the moment you step inside. With its spacious layout and thoughtful design, this house offers the perfect balance of comfort and sophistication.

  As you enter the house, you'll be greeted by an open and airy living space that is bathed in natural light. The high ceilings and large windows create a bright and inviting atmosphere, making it the perfect place to relax and unwind after a long day. The living room seamlessly flows into the dining area and kitchen, which is equipped with top-of-the-line appliances and sleek, modern finishes.
  
  The master suite is a true oasis, with its spacious layout, en-suite bathroom, and walk-in closet. The additional bedrooms are equally as impressive, with ample closet space and plenty of room to make them your own. The home also features a spacious backyard, perfect for entertaining guests or enjoying a peaceful evening outdoors.
  
  Located in the heart of Williamsburg, this home is just steps away from some of the city's best restaurants, cafes, and shops. With its prime location and luxurious amenities, this property won't be on the market for long. Don't miss your chance to make it your own!",
  sale_type: "Sale",
  year_built: 1942,
  num_baths: 2,
  num_beds: 3
}))

listings.push(Listing.create!({
  lister_id: 7,
  street_number: '214',
  street_address: "Grand St",
  city: 'Brooklyn',
  state: 'NY',
  zipcode: "11211",
  price: Faker::Number.between(from: 500, to: 3000) * 1000,
  home_type: 'House',
  square_feet: Faker::Number.between(from: 10, to: 40) * 100,
  description: "Welcome to your new home in the heart of Williamsburg! This charming townhouse boasts three levels of modern luxury and is just waiting for you to make it your own.

  As you enter the home, you're greeted by a spacious living area, perfect for hosting friends and family. The open floor plan leads to a gourmet kitchen, complete with stainless steel appliances and quartz countertops, making cooking a breeze.
  
  Head upstairs to find the primary bedroom, complete with a luxurious en-suite bathroom and ample closet space. Two additional bedrooms and another full bathroom provide plenty of room for guests or a growing family.
  
  The top level features a stunning rooftop terrace with breathtaking views of the Brooklyn skyline. Perfect for entertaining or enjoying a quiet evening at home, this space is sure to impress.
  
  Located just steps away from some of the best restaurants, bars, and shops that Williamsburg has to offer, this townhouse is the perfect blend of modern convenience and classic Brooklyn charm. Don't miss out on the opportunity to make this house your dream home!",
  sale_type: "Sale",
  year_built: 1953,
  num_baths: 3,
  num_beds: 3
}))

listings.push(Listing.create!({
  lister_id: 8,
  street_number: '255',
  street_address: "W 23rd St",
  city: 'New York',
  state: 'NY',
  zipcode: "10011",
  price: Faker::Number.between(from: 25, to: 70) * 100,
  home_type: 'House',
  square_feet: Faker::Number.between(from: 10, to: 40) * 100,
  description: "Welcome to this stunning and spacious townhouse in the heart of Chelsea, one of New York City's most sought-after neighborhoods. This beautiful home features four levels of luxurious living space, with four bedrooms, three and a half bathrooms, and an abundance of natural light.

  As you enter the home, you'll be greeted by a grand foyer with soaring ceilings and elegant hardwood floors. The main level boasts an open concept living and dining area, perfect for entertaining guests or relaxing with family. The chef's kitchen features top-of-the-line appliances, granite countertops, and ample cabinet space.
  
  The second level is dedicated to the primary suite, complete with a walk-in closet and a spa-like bathroom with a deep soaking tub and a separate shower. Two additional bedrooms and a full bathroom can be found on the third level, while the fourth level offers a private fourth bedroom and a full bathroom.
  
  This townhouse also features a finished basement with a laundry room and plenty of storage space. Outside, you'll find a beautifully landscaped backyard oasis, perfect for enjoying a morning cup of coffee or hosting summer barbecues.
  
  Located just steps from the city's best dining, shopping, and entertainment options, this townhouse is the epitome of luxury living in the heart of New York City.",
  sale_type: "Rent",
  year_built: 1923,
  num_baths: 3.5,
  num_beds: 4
}))

listings.push(Listing.create!({
  lister_id: 8,
  street_number: '555',
  street_address: "W 25th St",
  city: 'New York',
  state: 'NY',
  zipcode: "10001",
  price: Faker::Number.between(from: 25, to: 70) * 100,
  home_type: 'House',
  square_feet: Faker::Number.between(from: 10, to: 40) * 100,
  description: "Welcome to your luxurious urban oasis in the heart of Chelsea! This stunning townhouse offers the perfect blend of modern amenities and classic charm. The spacious and bright living room boasts soaring ceilings, oversized windows, and a cozy fireplace, making it the ideal spot for entertaining guests or enjoying a quiet evening at home.

  The fully equipped gourmet kitchen is a chef's dream, featuring high-end stainless steel appliances, sleek cabinetry, and a convenient breakfast bar. The adjacent dining area is perfect for hosting dinner parties or intimate gatherings with friends and family.
  
  Upstairs, you'll find a serene master suite complete with a spa-like en-suite bathroom and plenty of closet space. Two additional bedrooms and a second full bathroom provide ample space for guests or a growing family.
  
  Other features of this fabulous townhouse include hardwood floors throughout, central air conditioning and heating, and a private rooftop terrace with stunning city views. And with its unbeatable location just steps from world-class restaurants, shopping, and cultural attractions, you'll be living the ultimate New York City lifestyle. Don't miss your chance to make this incredible townhouse your new home!",
  sale_type: "Rent",
  year_built: 1974,
  num_baths: 1.5,
  num_beds: 3
}))

listings.each_with_index do |listing, idx|
  listing.images.attach(io: URI.open("https://zilloh-seeds.s3.us-east-2.amazonaws.com/listing_#{idx + 1}.jpg"), filename: "listing_#{idx+1}.jpg")
  listing.images.attach(io: URI.open("https://zilloh-seeds.s3.us-east-2.amazonaws.com/Bedroom/bed_#{1001 + idx}.jpg"), filename: "bed_#{1001 + idx}.jpg")
  listing.images.attach(io: URI.open("https://zilloh-seeds.s3.us-east-2.amazonaws.com/Kitchen/kitchen_#{1001 + idx}.jpg"), filename: "kitchen_#{1001 + idx}.jpg")
  listing.images.attach(io: URI.open("https://zilloh-seeds.s3.us-east-2.amazonaws.com/Livingroom/living_#{1001 + idx}.jpg"), filename: "living_#{1001 + idx}.jpg")
  listing.images.attach(io: URI.open("https://zilloh-seeds.s3.us-east-2.amazonaws.com/Bathroom/bath_#{1001 + idx}.jpg"), filename: "bath_#{1001 + idx}.jpg")
  address = "#{listing.street_number} #{listing.street_address}, #{listing.city}, #{listing.state} #{listing.zipcode}"
  latlng = Geocoder.search(address).first.coordinates
  listing.latitude = latlng[0]
  listing.longitude = latlng[1]
  listing.save!
end

puts "Creating favorites..."

Favorite.create!({user_id: 1, listing_id: 1})
Favorite.create!({user_id: 1, listing_id: 2})
Favorite.create!({user_id: 1, listing_id: 5})
Favorite.create!({user_id: 1, listing_id: 7})
Favorite.create!({user_id: 2, listing_id: 2})
Favorite.create!({user_id: 2, listing_id: 5})
Favorite.create!({user_id: 2, listing_id: 3})
Favorite.create!({user_id: 2, listing_id: 10})
Favorite.create!({user_id: 3, listing_id: 1})
Favorite.create!({user_id: 4, listing_id: 1})
Favorite.create!({user_id: 4, listing_id: 7})
Favorite.create!({user_id: 5, listing_id: 9})
Favorite.create!({user_id: 5, listing_id: 11})
Favorite.create!({user_id: 7, listing_id: 2})
Favorite.create!({user_id: 7, listing_id: 3})
Favorite.create!({user_id: 8, listing_id: 3})
Favorite.create!({user_id: 8, listing_id: 4})
Favorite.create!({user_id: 8, listing_id: 5})

puts "Done!"

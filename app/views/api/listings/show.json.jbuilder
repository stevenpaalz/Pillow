json.listing do 
    json.extract! @listing, :id, :lister, :street_number, :street_address, :unit_number, :city, :state, :price, :home_type, :square_feet, :description, :sale_type, :air_con, :year_built, :zipcode, :num_baths, :num_beds, :latitude, :longitude
    json.imageUrls @listing.images.map { |file| file.url }
    json.array! @listing.favoritors do |favoritor|
        favoritor.id
    end
end
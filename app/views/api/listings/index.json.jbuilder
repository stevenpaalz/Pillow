json.array! @listings do |listing|
    json.listing do
        json.extract! listing, :id, :lister, :street_number, :street_address, :unit_number, :city, :state, :price, :home_type, :square_feet, :description, :sale_type, :air_con, :year_built, :zipcode, :num_baths, :num_beds, :latitude, :longitude
        json.imageUrls [listing.images[0].url]
    end
end


# favorite_ids = listing.favoritors.map do |favoritor|
#     favoritor.user_id
# end
# json.favoritorIds = favorite_ids
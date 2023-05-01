ids = []
json.listings do
    json.array! @listings do |listing|
        json.listing do
            ids.push(listing.id)
            favoriteIds = listing.favorites.map do |favorite|
                favorite.id
            end
            favoritorIds = listing.favorites.map do |favorite|
                favorite.user_id
            end
            json.extract! listing, :id, :lister, :street_number, :street_address, :unit_number, :city, :state, :price, :home_type, :square_feet, :description, :sale_type, :air_con, :year_built, :zipcode, :num_baths, :num_beds, :latitude, :longitude
            json.imageUrls listing.images[0] ? [listing.images[0].url] : []
            json.favoriteIds favoriteIds
            json.favoritorIds favoritorIds
        end
    end
end
json.listingsIds ids
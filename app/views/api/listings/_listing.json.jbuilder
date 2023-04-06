# if !listing.photos.attached?
#     photoUrls = nil
# else 
#     photoUrls = listing.photos.map do |photo|
#         photo.url
#     end
# end

json.listing do 
    json.extract! listing, :id, :lister, :street_number, :street_address, :unit_number, :city, :state, :price, :home_type, :square_feet, :description, :sale_type, :air_con, :year_built, :zipcode, :num_baths, :num_beds
    # json.photoUrl listing.photo.attached? ? listing.photo.url : nil
    # json.imageUrls listing.images.map { |file| file.url }
end

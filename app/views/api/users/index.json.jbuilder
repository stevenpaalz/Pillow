json.array! @users do |user|
    json.user do
      favoriteIds = user.favorites.map do |favorite|
        favorite.id
      end
      favoritedIds = user.favorites.map do |favorite|
        favorite.listing_id
      end
      json.extract! user, :id, :email, :created_at, :updated_at
      json.favoriteIds favoriteIds
      json.favoritedIds favoritedIds
    end
end
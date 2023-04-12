json.user do
  favoriteIds = @user.favorites.map do |favorite|
    favorite.id
  end
  json.extract! @user, :id, :email, :created_at, :updated_at
  json.favoriteIds favoriteIds
end
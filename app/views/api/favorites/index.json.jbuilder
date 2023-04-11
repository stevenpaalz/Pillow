json.array! @favorites do |favorite|
    json.favorite do
        json.extract! favorite, :id, :listing_id, :user_id
    end
end

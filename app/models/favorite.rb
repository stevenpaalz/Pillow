class Favorite < ApplicationRecord

    validates :user_id, :listing_id, presence: true

    belongs_to(
        :user,
        foreign_key: :user_id,
        primary_key: :id,
        class_name: :User
    )

    belongs_to(
        :listing,
        foreign_key: :listing_id,
        primary_key: :id,
        class_name: :Listing
    )
end

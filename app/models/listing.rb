# == Schema Information
#
# Table name: listings
#
#  id             :bigint           not null, primary key
#  lister_id      :bigint           not null
#  street_number  :integer          not null
#  street_address :string           not null
#  unit_number    :string
#  city           :string           not null
#  state          :string           not null
#  price          :integer          not null
#  home_type      :string           not null
#  square_feet    :integer          not null
#  description    :text
#  sale_type      :string           not null
#  air_con        :string
#  year_built     :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  zipcode        :string           not null
#  num_baths      :decimal(4, 1)    not null
#  num_beds       :decimal(4, 1)    not null
#
class Listing < ApplicationRecord

  has_many_attached :images

  has_many(
    :favorites,
    foreign_key: :listing_id,
    primary_key: :id,
    class_name: :Favorite,
    dependent: :destroy
  )

  HOME_TYPE = [
    "Condo",
    "Apartment",
    "House",
    "New Construction"
  ]

  SALE_TYPE = [
    "Rent",
    "Sale"
  ]

  validates :lister_id, :street_number, :street_address, :city, :state, :num_beds, :num_baths, presence: true;
  validates :year_built, numericality: { in: 1700..2023 }
  validates :square_feet, :price, numericality: {greater_than: 0}
  validates :zipcode, length: {minimum: 5}
  validates :home_type, inclusion: {in: HOME_TYPE}
  validates :sale_type, inclusion: {in: SALE_TYPE}

  belongs_to(
    :lister,
    foreign_key: :lister_id,
    primary_key: :id,
    class_name: :User
  ) 
end

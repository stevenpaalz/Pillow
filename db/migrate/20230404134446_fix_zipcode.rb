class FixZipcode < ActiveRecord::Migration[7.0]
  def change

    remove_column :listings, :zipcode
    add_column :listings, :zipcode, :string, null: false
    remove_column :listings, :num_baths
    remove_column :listings, :num_beds
    add_column :listings, :num_baths, :decimal, null: false, precision: 4, scale: 1
    add_column :listings, :num_beds, :decimal, null: false, precision: 4, scale: 1
  end
end

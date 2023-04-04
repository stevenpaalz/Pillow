class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.bigint :lister_id, null: false
      t.integer :street_number, null: false
      t.string :street_address, null: false
      t.string :unit_number
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zipcode, null: false
      t.integer :price, null: false
      t.string :home_type, null: false
      t.decimal :num_beds, null: false
      t.decimal :num_baths, null: false
      t.integer :square_feet, null: false
      t.text :description
      t.string :sale_type, null: false
      t.string :air_con
      t.integer :year_built, null: false

      t.timestamps
    end

    add_foreign_key :listings, :users, column: :lister_id
    add_index :listings, :zipcode
    add_index :listings, :price
  end
end

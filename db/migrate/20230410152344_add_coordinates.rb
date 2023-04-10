class AddCoordinates < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :latitude, :string
    add_column :listings, :longitude, :string
  end
end

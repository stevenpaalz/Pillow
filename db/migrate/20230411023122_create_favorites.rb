class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.references :user, null: false
      t.references :listing, null: false

      t.timestamps
    end
  end
end

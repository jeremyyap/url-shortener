class CreateShortLinks < ActiveRecord::Migration[6.0]
  def change
    create_table :short_links do |t|
      t.string :slug, null: false
      t.string :original_url, null: false

      t.timestamps
    end
    add_index :short_links, :slug, unique: true
  end
end

class CreateShortLinks < ActiveRecord::Migration[6.0]
  def change
    create_table :short_links do |t|
      t.string :hash
      t.string :original_url

      t.timestamps
    end
    add_index :short_links, :hash
  end
end

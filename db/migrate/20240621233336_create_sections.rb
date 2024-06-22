class CreateSections < ActiveRecord::Migration[7.0]
  def change
    create_table :sections do |t|
      t.references :article, null: false, foreign_key: true
      t.string :title
      t.text :text, null: false
      t.string :image

      t.timestamps
    end
  end
end

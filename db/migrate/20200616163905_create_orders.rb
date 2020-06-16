class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.integer :sliced_lamb
      t.integer :tiger_prawns
      t.integer :dory_fish
      t.integer :baby_kailan
      t.integer :mixed_vegetables
      t.integer :sliced_chicken
      t.integer :kagoshima_japanese_wagyu_sirloin_steak
      t.integer :lobster_red_wine_sauce_and_yuzu_kosho
      t.integer :iberico_pork_pluma
      t.integer :japanese_steamed_rice
      t.integer :table
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

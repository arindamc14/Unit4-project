class AddFieldsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :name, :string
    add_column :users, :address, :text
    add_column :users, :number, :string
  end
end

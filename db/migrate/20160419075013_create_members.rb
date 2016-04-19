class CreateMembers < ActiveRecord::Migration
  def change
    create_table :members do |t|
      t.references :tenant, index: true
      t.references :user, index: true
      t.string :first_name
      t.string :last_name

      t.timestamps null: false
    end
    add_foreign_key :members, :tenants
    add_foreign_key :members, :users
  end
end

class CreateTenants < ActiveRecord::Migration
  def change
    create_table :tenants do |t|
      t.references :tenant, index: true
      t.string :name

      t.timestamps null: false
    end
    add_index :tenants, :name
    add_foreign_key :tenants, :tenants
  end
end

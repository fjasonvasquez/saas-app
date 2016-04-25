class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.string :details
      t.date :expected_completion_date
      t.belongs_to :tenant, index: true

      t.timestamps null: false
    end
    add_foreign_key :projects, :tenants
  end
end

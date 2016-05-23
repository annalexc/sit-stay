class CreatePostings < ActiveRecord::Migration
  def change
    create_table :postings do |t|
      t.string :name
      t.string :email
      t.string :pet_type
      t.string :street_address
      t.string :city
      t.string :state
      t.integer :zipcode
      t.string :start_date
      t.string :end_date
      t.integer :is_stay_post, default: 0
      t.string :comments
      t.timestamps null: false
    end
  end
end
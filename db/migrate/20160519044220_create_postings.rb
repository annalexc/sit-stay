class CreatePostings < ActiveRecord::Migration
  def change
    create_table :postings do |t|
      t.string :name
      t.string :email
      t.string :pet_type
      t.string :image_url
      t.string :street_address
      t.string :city
      t.string :state
      t.integer :zipcode
      t.date :start_date
      t.date :end_date
      t.integer :is_sit_post, default: 1
      t.integer :is_stay_post, default: 0
      t.timestamps null: false
    end
  end
end
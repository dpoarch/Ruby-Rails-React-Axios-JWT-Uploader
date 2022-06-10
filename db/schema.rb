# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2018_10_02_194419) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string "name"
  end

  create_table "listings", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.string "address"
    t.string "description"
    t.integer "host_id"
    t.integer "neighbourhood_id"
    t.json "avatars"
    t.float "lat"
    t.float "lng"
  end

  create_table "neighbourhoods", force: :cascade do |t|
    t.string "name"
    t.integer "city_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.date "check_in"
    t.date "check_out"
    t.integer "guest_number"
    t.integer "guest_id"
    t.integer "listing_id"
    t.string "avatar"
    t.string "file"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "rating"
    t.string "description"
    t.integer "guest_id"
    t.integer "reservation_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password_digest"
    t.string "avatar"
    t.string "email"
  end

end

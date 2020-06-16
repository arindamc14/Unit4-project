# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_16_163905) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "menus", force: :cascade do |t|
    t.string "item"
    t.string "price"
    t.integer "priceForCalculation"
    t.integer "count"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "orders", force: :cascade do |t|
    t.integer "sliced_lamb"
    t.integer "tiger_prawns"
    t.integer "dory_fish"
    t.integer "baby_kailan"
    t.integer "mixed_vegetables"
    t.integer "sliced_chicken"
    t.integer "kagoshima_japanese_wagyu_sirloin_steak"
    t.integer "lobster_red_wine_sauce_and_yuzu_kosho"
    t.integer "iberico_pork_pluma"
    t.integer "japanese_steamed_rice"
    t.integer "table"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.text "address"
    t.string "number"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "orders", "users"
end

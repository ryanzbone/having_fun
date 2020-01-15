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

ActiveRecord::Schema.define(version: 2020_01_15_123427) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "free_text_answers", force: :cascade do |t|
    t.bigint "free_text_question_id", null: false
    t.bigint "user_id", null: false
    t.string "text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["free_text_question_id"], name: "index_free_text_answers_on_free_text_question_id"
    t.index ["user_id"], name: "index_free_text_answers_on_user_id"
  end

  create_table "free_text_questions", force: :cascade do |t|
    t.string "text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "uuid"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "free_text_answers", "free_text_questions"
  add_foreign_key "free_text_answers", "users"
end

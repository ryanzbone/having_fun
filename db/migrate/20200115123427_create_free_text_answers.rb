class CreateFreeTextAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :free_text_answers do |t|
      t.references :free_text_question, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.string :text

      t.timestamps
    end
  end
end

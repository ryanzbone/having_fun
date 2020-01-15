class FreeTextAnswer < ApplicationRecord
  belongs_to :free_text_question
  belongs_to :user
end

class GamesController < ApplicationController
  def index
    @question = Question.next
    @free_text_answer = FreeTextAnswer.new
  end
end

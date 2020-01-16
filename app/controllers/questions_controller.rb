class QuestionsController < ApplicationController
  def index
    @question = Question.next
    respond_to do |format|
      format
    end
  end
end

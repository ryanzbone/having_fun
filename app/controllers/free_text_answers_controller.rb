class FreeTextAnswersController < ApplicationController
  def create
    @free_text_answer = FreeTextAnswer.new(free_text_answer_params)
    if @free_text_answer.save
      redirect_to root_path
    else
      flash[:error] = "try again"
      redirect_to root_path
    end
  end
end

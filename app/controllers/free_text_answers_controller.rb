class FreeTextAnswersController < ApplicationController
  def create
    @free_text_answer = FreeTextAnswer.new(free_text_answer_params)

    respond_to do |format|
      if @free_text_answer.save
        @next_question = Question.next
        format.html { redirect_to root_path }
        format.js
      else
        binding.pry
        format.html { redirect_to root_path }
        format.json { render json: @free_text_answer.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def free_text_answer_params
    params.require(:free_text_answer)
      .permit(:text, :free_text_question_id)
      .merge(user_id: current_user.id)
  end
end

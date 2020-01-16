class GamesController < ApplicationController
  def index
    @question = FreeTextQuestion.order("RANDOM()").first
    @answer = FreeTextAnswer.new
  end
end

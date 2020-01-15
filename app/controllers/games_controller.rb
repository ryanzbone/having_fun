class GamesController < ApplicationController
  def index
    @question = FreeTextQuestion.order("RANDOM()").first
  end
end

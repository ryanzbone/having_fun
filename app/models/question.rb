class Question
  def self.next(user: user)
    answered = FreeTextAnswer.where(user: user)
    FreeTextQuestion.where.not(id: answered.map(&:id)).order("RANDOM()").first
  end
end

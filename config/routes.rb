Rails.application.routes.draw do
  root to: 'games#index'
  resources :free_text_answers, only: [:create]

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

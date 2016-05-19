Rails.application.routes.draw do
  

  namespace :api do
    resources :postings
  end

  root 'welcome#index'

end

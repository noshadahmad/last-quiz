Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :auctions
  resources :bids, only: [:create]

  namespace :api, default: { format: :json } do
    namespace :v1 do
      resources :auctions, only: [:index, :show, :create]
      resources :sessions, only: [:create] 
      resources :users, only: [:create]
      get('/current_user', to: 'sessions#get_current_user')
    end
  end
end

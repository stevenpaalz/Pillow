Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # resources :listings, only: [:show]

  namespace :api, defaults: { format: :json } do
    resources :favorites, only: [:index, :create, :destroy]
    resource :session, only: [:show, :create, :destroy]
    resources :users, only: [:create, :show, :index]
    resources :listings, only: [:show, :create, :destroy, :index, :update]
    resources :users do 
      resources :listings, only: [:index], shallow: true
    end
  end
  # get '/api/:id/search', to: 'api/search#user'
  get '/api/search', to: 'api/search#index', query: [:q]
  get '*path', to: "static_pages#frontend_index"
end

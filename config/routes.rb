Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # resources :listings, only: [:show]

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:show, :create, :destroy]
    resources :users, only: :create
    resources :listings, only: [:show, :create, :destroy, :index, :update] do
      resources :favorites, only: [:create, :destroy]
    end
    resources :favorites, only: [:index]
  end

  get '*path', to: "static_pages#frontend_index"
end

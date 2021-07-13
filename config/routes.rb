# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'lists#index'
  resources :lists, only: %i[index show new create] do
    resources :bookmarks, only: %i[new create]
  end
  resources :bookmarks, only: [:destroy]
  delete 'lists/:id', to: 'lists#destroy', as: :delete_list
  resources :movies, only: [] do
    resources :marks, only: [:create]
  end
  post '/marks/:id', to: 'marks#update', as: :mark
end

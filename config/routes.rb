Rails.application.routes.draw do
  root to:"results#new"
  get '/new' , to:"results#new"
  get "results/index"
  get 'results/create'

  post "/results" , to:"results#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

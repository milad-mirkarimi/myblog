Rails.application.routes.draw do
  scope 'api' do
    namespace 'v1' do
      post 'login' => 'auth#create'

      resources :articles do
        resources :sections, only: [:create]
      end
    end
  end
end

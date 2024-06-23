Rails.application.routes.draw do
  root to: "application#fallback_index_html"
  scope 'api' do
    namespace 'v1' do
      post 'login' => 'auth#create'

      resources :articles do
        resources :sections, only: [:create]
      end
    end
  end

  get '*path', to: "application#fallback_index_html"
end

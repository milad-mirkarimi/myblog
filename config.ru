# This file is used by Rack-based servers to start the application.

require_relative "config/environment"

use Rack::Cors do
  allow do
    origins "*" # or specify your frontend URL, e.g., 'http://localhost:3001'

    resource "*",
             headers: :any,
             methods: %i(get post put patch delete options head),
             expose: [ "Authorization" ]
  end
end

run Rails.application
Rails.application.load_server

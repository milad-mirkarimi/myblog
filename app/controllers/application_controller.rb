class ApplicationController < ActionController::API
  def jwt_encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  def jwt_decode(token)
    decoded_token = JWT.decode(token, Rails.application.credentials.secret_key_base)[0]
    logger.info "Decoded Token: #{decoded_token.inspect}"
    decoded_token
  rescue => e
    logger.error "JWT Decode Error: #{e.message}"
    nil
  end

  def authorize_request
    header = request.headers["Authorization"]
    if header.nil?
      render json: { errors: "Token does not exist" }, status: :unauthorized
      return
    end

    token = header.split(" ").last
    begin
      decoded = jwt_decode(token)
      @current_user = User.find(decoded["user_id"])
    rescue ActiveRecord::RecordNotFound
      render json: { errors: "User does not exist" }, status: :unauthorized
    rescue JWT::DecodeError
      render json: { errors: "Token is fake" }, status: :unauthorized
    rescue StandardError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end

  def fallback_index_html
    render file: Rails.root.join("public/index.html")
  end
end

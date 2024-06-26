class V1::AuthController < ApplicationController
  def create
    @user = User.find_by(email: login_params[:email])
    if @user&.authenticate(login_params[:password])
      token = jwt_encode(user_id: @user.id)
      # response.set_header('Authorization', token)
      render json: { token: token }, status: :ok
    else
      render json: { error: "unauthorized" }, status: :unauthorized
    end
  end

  private

  def login_params
    params.permit(:email, :password)
  end
end

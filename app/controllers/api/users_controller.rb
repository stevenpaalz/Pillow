class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  def create
    @user = User.new(user_params)
    @user[:email] = user_params[:email].downcase

    if @user.save
      login!(@user)
      render :show
    else 
      render json: { errors: ['Not a valid email address'] }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end

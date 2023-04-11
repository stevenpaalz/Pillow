class Api::FavoritesController < ApplicationController
    wrap_parameters include: Favorite.attribute_names

    def index
        @favorites = Favorite.all
        render :index
    end

    def create
        @favorite = Favorite.new({listing_id: params['listing_id'], user_id: params['user_id']})
        if @favorite.save!
            render json: @favorite
        else
            render json: { errors: @favorite.errors.full_messages}, status: 422
        end
    end

    def destroy
        @favorite = Favorite.find(params[:id])
        if @favorite.user_id === current_user.id
            @favorite.destroy
        end
    end

    private

    def favoriteparams
        params.require(:favorite).permit(:user_id, :listing_id)
    end

end

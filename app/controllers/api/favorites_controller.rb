class Api::FavoritesController < ApplicationController

    def index
        @favorites = Favorite.all
        render :index
    end

    def create
    end

    def destroy
    end

end
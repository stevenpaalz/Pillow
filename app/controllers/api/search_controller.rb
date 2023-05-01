class Api::SearchController < ApplicationController

    def index
        query_string = params[:q]
        if !query_string || query_string === ""
            @listings = Listing.all
        else
            @listings = Listing.where('zipcode = ?', query_string).or(Listing.where('city = ?', query_string)).or(Listing.where('state = ?', query_string))
        end
        render 'api/listings/index'
    end

    # def user
    #     user_id = params[:id]
    #     @listings = Listing.where('lister = ?', user_id)
    #     render 'api/listings/index'
    # end

end
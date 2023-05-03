class Api::SearchController < ApplicationController

    def index
        query_string = params[:q]
        type = params[:type]
        if query_string && type
            @listings = Listing.where('sale_type = ?', type).and(Listing.where('zipcode LIKE ?', "#{query_string}%").or(Listing.where('city LIKE ?', "#{query_string}%")).or(Listing.where('state = ?', query_string)).or(Listing.where('street_address LIKE ?', "#{query_string}%")))
        elsif (!query_string || query_string === "") && type
            @listings = Listing.where('sale_type = ?', type)
        elsif (!type || type === "") && query_string
            @listings = Listing.where('zipcode LIKE ?', "#{query_string}%").or(Listing.where('city LIKE ?', "#{query_string}%")).or(Listing.where('state = ?', query_string)).or(Listing.where('street_address LIKE ?', "#{query_string}%"))
        else
            @listings = Listing.all
        end
        render 'api/listings/index'
    end

end
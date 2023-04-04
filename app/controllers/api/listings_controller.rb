class Api::ListingsController < ApplicationController
    wrap_parameters include: Listing.attribute_names

    def index
        @listings = Listing.all
        render :index
    end

    def show
        @listing = Listing.find(params[:id])
        render :show
    end

    def create
        @listing = Listing.new(listingparams)
        if @listing.save
            render :show
        else
            render json: { errors: @listing.errors.full_messages}, status: 422
        end
    end

    def update
        @listing = Listing.find(params[:id])
        if @listing.update(listingparams)
            render :show
        else
            render json: { errors: @listing.errors.full_messages}, status: 422
        end
    end

    def destroy
        @listing = Listing.find(params[:id])
        if @listing.lister_id === current_user.id
            @listing.destroy
        end
    end

    private

    def listingparams
        params.require(:listing).permit(:lister_id, :street_number, :street_address, :unit_number, :city, :state, :price, :home_type, :square_feet, :description, :sale_type, :air_con, :year_built, :zipcode, :num_baths, :num_beds)
    end

end

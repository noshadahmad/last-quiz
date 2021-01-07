class AuctionsController < ApplicationController
    class AuctionsController < ApplicationController


        before_action :find_auction_params, only: [:show]
        def index
            @auction = Auction.all
            respond_to do |format|
                format.html{ render }
                format.json{ render }
              endra
    
        end
        def new
            @auction = Auction.new
        end
        def create
            @auction = Auction.new find_auction_params
        end
        def show
            @auction = Auction.find params[:id]
    
        end
        private
        def find_auction_params
            params.require(:auction).permit(:title, :body)
        end
        def find_auction
            @auction = Auction.find params[:id]
        end
    end
    
end

class BidsController < ApplicationController
    def create 
        @auction = Auction.find params[:auction_id]
        @bids = Bid.new params.require(:bids).permit(:body)
        @bids.auction = @auction
    end
end

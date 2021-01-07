import React, { Component } from 'react';
import AuctionDetails from './AuctionDetailsPage';
// import AuctionIndexPage from './auctionIndexPage';
import { Auction } from '../FetchRequests'
import { TempData } from '../TempData'

class AuctionShowPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            auction: {}
        }
    }


    componentDidMount() {
        Auction.show(this.props.match.params.id)
        .then( auction =>
            {
                this.setState((state) =>
                {
                    return {
                        auction: auction
                    }
                })
            })
    }
    render() {
        return (
            <main>
             <AuctionDetails
             title= { this.state.auction.title}
             body={ this.state.auction.body }
            //  created_at= {this.state.auction.created_at}
             
             />
            </main>

            
        )
    }
}
export default AuctionShowPage
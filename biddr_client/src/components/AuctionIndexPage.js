import React, { Component } from 'react';
import NewAuctionForm from './NewAuctionForm';
import { Auction } from '../FetchRequests'


class AuctionIndexPage extends Component {
    constructor(props){
        
        super(props)
        this.state ={
            auctions: []
        }
        this.createAuction = this.createAuction.bind(this)

    }
    componentDidMount(){
        Auction.index()
        .then((a) =>
        {
            this.setState ((state) => {
                return {
            auctions: a
                }
            })
        })
    }

  createAuction(params) {
    this.setState((state) => {
        console.log(this.state);
      return {
        auctions: [
          {
            id: (Math.max(...state.auctions.map(a => a.id)) + 1),
            ...params
          },
          ...state.auctions
        ]
        
      }
    })
  }


  render() {
    return (
      <main>
        <h1>Auctions</h1>
        <NewAuctionForm onSubmit={this.createAuction}/>
        <ul style={{ padding: 0, listStyle: 'none'}}>
          {
            this.state.auctions.map(auction => {
              return(
                <li key={auction.id}>
                  <a href={`/auctions/${auction.id}`}>{auction.title}</a>
                  <br />
                  <small>posted on {auction.created_at}</small>
                  <p>{auction.body}</p>
                  <p>{auction.ends}</p>
                  <p>{auction.price}</p>

                </li>
              )
            })
          }
        </ul>
      </main>
    );
  }
}
export default AuctionIndexPage;